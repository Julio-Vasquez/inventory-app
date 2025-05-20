type FormatPriceOptions = {
  value: number
  decimalLength?: number
  locale?: string
  currencyCode: string
}

export const formatPriceByLocale = ({
  value,
  decimalLength = 2,
  locale = 'es-CO',
  currencyCode,
}: FormatPriceOptions) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    currencySign: 'standard',
    minimumFractionDigits: decimalLength,
    maximumFractionDigits: decimalLength,
  })

  return formatter.format(value)
}
