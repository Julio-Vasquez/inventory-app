export type ActionIconsProps<T = unknown> = {
  onView?: (record: T) => void
  onEdit?: (record: T) => void
  onDelete?: (record: T) => void
  confirmDelete?: boolean
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
}
