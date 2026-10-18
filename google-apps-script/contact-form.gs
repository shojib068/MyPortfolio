/**
 * Contact form → Google Sheets
 *
 * Receives messages from the portfolio's contact form and appends them as rows
 * to the spreadsheet below. Deploy as a Web App (see portfolio.md → "Contact form").
 */

const SPREADSHEET_ID = '1kytaVqcn9eNi6RiiX9UrZKZs1quNgRk5MZaOwBJOp8o';
const SHEET_NAME = 'Messages';
const HEADERS = ['Timestamp', 'Name', 'Email', 'Subject', 'Message'];
const MAX_LENGTH = { name: 120, email: 200, subject: 200, message: 5000 };

function doPost(e) {
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || '{}');

    // Honeypot: real visitors never fill the hidden "website" field
    if (data.website) return json({ ok: true });

    const row = {};
    for (const key of Object.keys(MAX_LENGTH)) {
      row[key] = clean(data[key]).slice(0, MAX_LENGTH[key]);
    }
    if (!row.name || !row.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) {
      return json({ ok: false, error: 'Please fill in your name, a valid email and a message.' });
    }

    // Serialise writes so simultaneous submissions don't overwrite each other
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = getSheet();
      sheet.appendRow([new Date(), row.name, row.email, row.subject, row.message]);
    } finally {
      lock.releaseLock();
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: 'Something went wrong. Please try again.' });
  }
}

// Visiting the Web App URL in a browser shows this — handy to check the deployment works
function doGet() {
  return json({ ok: true, message: 'Contact form endpoint is running.' });
}

function getSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Trim, and stop values starting with = + - @ from being run as spreadsheet formulas
function clean(value) {
  const text = String(value == null ? '' : value).trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
