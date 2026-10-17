# Player (Web Embedding)

Embed Remotion videos in web applications.

## Prerequisites

```bash
npx remotion add @remotion/player
```

## Basic Player

```tsx
import { Player } from '@remotion/player';
import { MyVideo } from './MyVideo';

const App = () => {
  return (
    <Player
      component={MyVideo}
      inputProps={{
        title: 'Hello',
        color: '#000',
      }}
      durationInFrames={150}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      style={{ width: 800 }}
      controls
    />
  );
};
```

## Player Props

| Prop | Type | Description |
|------|------|-------------|
| `component` | React.FC | Video component |
| `inputProps` | object | Props for the component |
| `durationInFrames` | number | Total frames |
| `fps` | number | Frames per second |
| `compositionWidth` | number | Video width |
| `compositionHeight` | number | Video height |
| `style` | CSSProperties | Container styles |
| `controls` | boolean | Show playback controls |
| `autoPlay` | boolean | Start on mount |
| `loop` | boolean | Loop playback |

## Programmatic Control

Use a ref:

```tsx
import { Player, PlayerRef } from '@remotion/player';
import { useRef } from 'react';

const App = () => {
  const playerRef = useRef<PlayerRef>(null);

  return (
    <>
      <Player
        ref={playerRef}
        component={MyVideo}
        durationInFrames={150}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
      />
      
      <button onClick={() => playerRef.current?.play()}>Play</button>
      <button onClick={() => playerRef.current?.pause()}>Pause</button>
      <button onClick={() => playerRef.current?.seekTo(0)}>Restart</button>
      <button onClick={() => playerRef.current?.seekTo(75)}>Frame 75</button>
    </>
  );
};
```

## Events

```tsx
<Player
  component={MyVideo}
  durationInFrames={150}
  fps={30}
  compositionWidth={1920}
  compositionHeight={1080}
  onPlay={() => console.log('Playing')}
  onPause={() => console.log('Paused')}
  onEnded={() => console.log('Ended')}
  onError={(e) => console.error('Error:', e)}
/>
```

## Thumbnail

Static frame preview:

```tsx
import { Thumbnail } from '@remotion/player';

<Thumbnail
  component={MyVideo}
  compositionWidth={1920}
  compositionHeight={1080}
  durationInFrames={150}
  fps={30}
  frameToDisplay={30}
  style={{ width: 200 }}
  inputProps={{ title: 'Preview' }}
/>
```

## Performance Tips

1. **Avoid re-renders** - Don't update Player props frequently
2. **Use refs** - Control playback via ref, not state
3. **Lazy load** - Only mount Player when visible

```tsx
// Bad: causes re-renders
const [frame, setFrame] = useState(0);
<Player onFrameUpdate={setFrame} />

// Good: use ref
const playerRef = useRef<PlayerRef>(null);
const getFrame = () => playerRef.current?.getCurrentFrame();
```
