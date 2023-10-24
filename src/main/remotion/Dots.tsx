import { AbsoluteFill } from 'remotion'
import Dot from './Dot'
import Explosion from './Explosion'
import { Shrinking } from './Shrink'
import Trail from './Trail'

export default function Dots() {
  return (
    <Explosion>
      <Trail amount={4} extraOffset={0}>
        {/* <Move delay={0}> */}
        <Shrinking>
          <Dot />
        </Shrinking>
        {/* </Move> */}
      </Trail>
    </Explosion>
  )
}

export const Stars: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        rotate: '0.3rad'
      }}
    >
      <Explosion>
        <Trail extraOffset={100} amount={4}>
          <Shrinking>
            <Star />
          </Shrinking>
        </Trail>
      </Explosion>
    </AbsoluteFill>
  )
}

const Star: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14
      }}
    >
      ⭐
    </AbsoluteFill>
  )
}
