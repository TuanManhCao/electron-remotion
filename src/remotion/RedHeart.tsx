import { AbsoluteFill } from 'remotion'
import Explosion from './Explosion'
import Move from './Move'
import { Shrinking } from './Shrink'

function RedHeart() {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      ❤️
    </AbsoluteFill>
  )
}

export function RedHearts() {
  return (
    <Explosion>
      <Move delay={5}>
        <AbsoluteFill style={{ transform: `translateY(-100px)` }}>
          <Shrinking>
            <RedHeart />
          </Shrinking>
        </AbsoluteFill>
      </Move>
    </Explosion>
  )
}

const YellowHeart: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      💛
    </AbsoluteFill>
  )
}

export const YellowHearts: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        rotate: '0.3rad'
      }}
    >
      <Explosion>
        <Move delay={20}>
          <AbsoluteFill
            style={{
              transform: `translateY(-50px)`
            }}
          >
            <Shrinking>
              <YellowHeart />
            </Shrinking>
          </AbsoluteFill>
        </Move>
      </Explosion>
    </AbsoluteFill>
  )
}
