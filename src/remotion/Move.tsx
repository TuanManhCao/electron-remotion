import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'

export default function Move({ children, delay }: { children: React.ReactNode; delay: number }) {
  const { fps } = useVideoConfig()
  const frame = useCurrentFrame()

  const down = spring({
    fps,
    frame: frame - delay,
    config: {
      damping: 200
    },
    durationInFrames: 120
  })

  const y = interpolate(down, [0, 1], [0, -400])
  return (
    <AbsoluteFill
      style={{
        translate: `0 ${y}px`
      }}
    >
      {children}
    </AbsoluteFill>
  )
}
