export function generateAvatar(): string {
  const randomNumber = Math.floor(Math.random() * 45) + 1;
  return `https://garticphone.com/images/avatar/${randomNumber}.svg`;
}
