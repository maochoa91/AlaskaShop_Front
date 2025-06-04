// AvatarAI.jsx
import { Player } from '@lottiefiles/react-lottie-player';
import talkingAnimation from './Animacion.json'; // animación Lottie

export default function AvatarAI({ isSpeaking }) {
  return (
    <div className="w-40">
      <Player
        autoplay
        loop={isSpeaking}
        src={talkingAnimation}
        style={{ height: '150px', width: '150px' }}
      />
    </div>
  );
}
