console.log('from a');

export default function randomEmojis() {
  return ['🎨', '💰', '🎩', '🎒', '🧿'][Math.floor(Math.random() * 5)];
}
