export const formatDayAndMonth = (dateString: string): string => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()

  return `${day} ${month}`
}

export const formatDayMonthYear = (dateString: string) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const suffix = getDaySuffix(day)
  const monthShort = date.toLocaleString('en-US', { month: 'short' })
  const yearShort = `'${date.getFullYear().toString().slice(-2)}`

  return `${day}${suffix} ${monthShort} ${yearShort}`
}

const getDaySuffix = (day: number) => {
  if (day >= 11 && day <= 13) return 'th'
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}
