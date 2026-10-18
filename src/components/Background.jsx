// Soft lavender blobs and a glass orb behind the page — they give the frosted panels something to blur.
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-violet-200/70 blur-[120px]"
        style={{ animation: 'drift 20s ease-in-out infinite' }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-indigo-200/60 blur-[130px]"
        style={{ animation: 'drift 24s ease-in-out infinite reverse' }}
      />
      <div
        className="absolute bottom-[-12rem] left-1/4 h-[30rem] w-[30rem] rounded-full bg-fuchsia-100/70 blur-[120px]"
        style={{ animation: 'drift 28s ease-in-out infinite' }}
      />
      {/* glassy orb on the right edge */}
      <div
        className="absolute top-[42%] right-[-60px] h-44 w-44 animate-float rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 28%, rgb(255 255 255 / 0.95), rgb(255 255 255 / 0) 42%), linear-gradient(160deg, rgb(221 214 254 / 0.8), rgb(199 210 254 / 0.4))',
          boxShadow: 'inset 0 -14px 30px rgb(139 92 246 / 0.25), 0 30px 60px -30px rgb(99 102 241 / 0.5)',
        }}
      />
    </div>
  );
}
