
export const dateFormatted = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')
  const secondsFormatted = (seconds % 60).toString().padStart(2, '0')
  return `${minutes}:${secondsFormatted}`
}
