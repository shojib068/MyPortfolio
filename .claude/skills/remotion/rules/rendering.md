# Rendering

## Programmatic Rendering (Node.js)

### Basic Script

```typescript
import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';

const compositionId = 'MyVideo';

// Bundle the project
const bundleLocation = await bundle({
  entryPoint: './src/index.ts',
});

// Get composition metadata
const composition = await selectComposition({
  serveUrl: bundleLocation,
  id: compositionId,
  inputProps: {
    title: 'Hello from Node',
  },
});

// Render
await renderMedia({
  composition,
  serveUrl: bundleLocation,
  codec: 'h264',
  outputLocation: 'out/video.mp4',
  inputProps: {
    title: 'Hello from Node',
  },
});
```

### Batch Rendering

Generate multiple videos from a dataset:

```typescript
import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';

const videos = [
  { id: 'video-1', title: 'First Video', color: '#ff0000' },
  { id: 'video-2', title: 'Second Video', color: '#00ff00' },
  { id: 'video-3', title: 'Third Video', color: '#0000ff' },
];

const bundleLocation = await bundle({
  entryPoint: './src/index.ts',
});

for (const video of videos) {
  console.log(`Rendering ${video.id}...`);
  
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: 'MyVideo',
    inputProps: video,
  });

  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: 'h264',
    outputLocation: `out/${video.id}.mp4`,
    inputProps: video,
  });
  
  console.log(`Completed ${video.id}`);
}
```

### Progress Callback

```typescript
await renderMedia({
  composition,
  serveUrl: bundleLocation,
  codec: 'h264',
  outputLocation: 'out/video.mp4',
  onProgress: ({ progress }) => {
    console.log(`Rendering: ${Math.round(progress * 100)}%`);
  },
});
```

### Render Still

```typescript
import { renderStill } from '@remotion/renderer';

await renderStill({
  composition,
  serveUrl: bundleLocation,
  output: 'out/thumbnail.png',
  frame: 30,
  inputProps: { title: 'Thumbnail' },
});
```

### Parallel Rendering

```typescript
const videos = [/* ... */];
const CONCURRENCY = 3;

const bundleLocation = await bundle({
  entryPoint: './src/index.ts',
});

// Split into chunks
const chunks = [];
for (let i = 0; i < videos.length; i += CONCURRENCY) {
  chunks.push(videos.slice(i, i + CONCURRENCY));
}

// Process chunks in parallel
for (const chunk of chunks) {
  await Promise.all(
    chunk.map(async (video) => {
      const composition = await selectComposition({
        serveUrl: bundleLocation,
        id: 'MyVideo',
        inputProps: video,
      });

      await renderMedia({
        composition,
        serveUrl: bundleLocation,
        codec: 'h264',
        outputLocation: `out/${video.id}.mp4`,
        inputProps: video,
      });
    })
  );
}
```

---

## Render Script Template

Save as `scripts/render.ts`:

```typescript
import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import path from 'path';

const [compositionId, outputPath] = process.argv.slice(2);

if (!compositionId || !outputPath) {
  console.error('Usage: npx tsx scripts/render.ts <CompositionId> <output.mp4>');
  process.exit(1);
}

async function main() {
  console.log(`Bundling...`);
  const bundleLocation = await bundle({
    entryPoint: path.join(process.cwd(), 'src/index.ts'),
  });

  console.log(`Selecting composition: ${compositionId}`);
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: compositionId,
  });

  console.log(`Rendering to ${outputPath}...`);
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: 'h264',
    outputLocation: outputPath,
    onProgress: ({ progress }) => {
      process.stdout.write(`\rProgress: ${Math.round(progress * 100)}%`);
    },
  });

  console.log(`\nDone! Output: ${outputPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

Run with:
```bash
npx tsx scripts/render.ts MyVideo out/video.mp4
```
