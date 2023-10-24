import { AbsoluteFill } from 'remotion'
import { Background } from './Background'
import Dots, { Stars } from './Dots'
import { RedHearts, YellowHearts } from './RedHeart'
import { Slowed } from './SlowTrailed'
// Import Move from './Move';

export const MyComposition = () => {
  return (
    <AbsoluteFill>
      <Background />
      <Slowed>
        <Dots />
        <RedHearts />
        <YellowHearts />
        <Stars />
      </Slowed>
    </AbsoluteFill>
  )
}
