import numeral from 'numeral'

export const formatCompactNumber = (digit?: number | string | null) => numeral(digit).format('0a')

export const formatCommaSeparatedNumber = (digit?: number | string | null) =>
  numeral(digit).format('0,0')

export const formatTwoDecimalPlaces = (digit?: number | string | null) =>
  numeral(digit).format('0,0.00')

export const formatSocialStatsCompactNumber = (digit?: number | string | null) => {
  if (digit === null || digit === undefined || isNaN(Number(digit))) {
    return ''
  }
  const number = Number(digit)
  if (number < 1) {
    return numeral(number).format('0.000')
  }
  return numeral(number).format('0.0a')
}
