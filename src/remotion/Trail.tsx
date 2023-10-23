import { AbsoluteFill, Sequence } from 'remotion'
import Move from './Move'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Trail({
  amount,
  children,
  extraOffset
}: {
  extraOffset: number
  amount: number
  children: React.ReactNode
}) {
  return (
    <AbsoluteFill>
      {new Array(amount).fill(true).map((_a, i) => {
        return (
          <Sequence from={i * 3} key={i}>
            <AbsoluteFill
              style={{
                translate: `0 ${-extraOffset}px`
              }}
            >
              <Move delay={0}>
                <AbsoluteFill
                  style={{
                    scale: String(1 - i / amount)
                  }}
                >
                  {children}
                </AbsoluteFill>
              </Move>
            </AbsoluteFill>
          </Sequence>
        )
      })}
    </AbsoluteFill>
  )
}
