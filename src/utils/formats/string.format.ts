type TruncateOptions = {
  value: string
  maxLength: number
  ellipsis?: boolean
}

export const capitalizeWords = (input: string) =>
  input
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

export const truncateString = ({
  value,
  maxLength,
  ellipsis = true,
}: TruncateOptions) => {
  if (!value || !maxLength) return value
  if (value.length <= maxLength) return value
  return value.slice(0, maxLength) + (ellipsis ? '...' : '')
}
