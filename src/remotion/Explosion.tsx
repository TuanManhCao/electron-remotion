import { AbsoluteFill } from 'remotion'

const AMOUNT = 10
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Explosion({ children }: { children: React.ReactNode }) {
  return (
    <AbsoluteFill>
      {new Array(AMOUNT).fill(true).map((_a, i) => {
        return (
          <>
            <AbsoluteFill
              style={{
                rotate: (i / AMOUNT) * (2 * Math.PI) + 'rad'
              }}
            >
              {children}
            </AbsoluteFill>
          </>
        )
      })}
    </AbsoluteFill>
  )
}
