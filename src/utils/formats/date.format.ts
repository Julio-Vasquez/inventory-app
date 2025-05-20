const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
}

const DATE_TIME_FORMAT: Intl.DateTimeFormatOptions = {
  ...DATE_FORMAT,
  hour: 'numeric',
  minute: 'numeric',
}

type FormatDateOptions = {
  date: Date
  includeTime?: boolean
  locale: string
}

export const formatDateByLocale = ({
  date,
  includeTime = false,
  locale,
}: FormatDateOptions) => {
  const format = includeTime ? DATE_TIME_FORMAT : DATE_FORMAT
  return new Date(date).toLocaleDateString(locale, format)
}
