import { useState } from 'react';

// Main viewer plus a row of thumbnails. Each media item is { type: 'video' | 'image', src, poster?, alt }.
export default function MediaGallery({ media, title }) {
  const [current, setCurrent] = useState(0);
  const item = media[current];

  return (
    <div>
      <div className="media-viewer">
        {item.type === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
          >
            Your browser does not support embedded video.
          </video>
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt={`${title} — ${item.alt}`}
            loading="lazy"
            className="media-fade h-full w-full object-contain"
          />
        )}
      </div>

      {media.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {media.map((m, i) => (
            <button
              key={m.src + i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Show ${m.alt}`}
              aria-pressed={i === current}
              className={`media-thumb ${i === current ? 'media-thumb--active' : ''}`}
            >
              <img src={m.type === 'video' ? m.poster : m.src} alt="" loading="lazy" className="h-full w-full object-cover" />
              {m.type === 'video' && <span className="media-thumb__play">▶</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
