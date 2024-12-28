export function getDottedStyle(
  color: string,
  dotSize: number,
  spacing: number
) {
  return {
    backgroundImage: `
      radial-gradient(
        ${color} ${dotSize}px, 
        transparent ${dotSize}px
      )`,
    backgroundSize: `${dotSize + spacing}px ${dotSize + spacing}px`,
  };
}

export function getStripingStyle(
  color: string,
  stripeWidth: number,
  transparentWidth: number
) {
  return {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      ${color} 0,
      ${color} ${stripeWidth}px,
      transparent ${stripeWidth}px,
      transparent ${stripeWidth + transparentWidth}px
    )`,
  };
}
