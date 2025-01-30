export const capitalizeFirstLetter = (text?: string | null) => {
  return text ? String(text?.charAt(0)?.toUpperCase()) + String(text?.slice(1)) : ''
}
