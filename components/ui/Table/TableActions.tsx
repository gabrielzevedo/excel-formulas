import FilterStatus from './Actions/FilterStatus'

export interface TableActionsProps {
  showFilterStatus?: boolean
  customFilter?: TableFilterProps[]
  filterKey?: string
}

export interface TableFilterProps {
  label: string | React.ReactNode
  value: string
}

const TableActions = ({
  showFilterStatus = true,
  customFilter,
  filterKey
}: TableActionsProps) => {
  return (
    <div className="w-full">
      {showFilterStatus ? (
        <FilterStatus items={customFilter} filterKey={filterKey} />
      ) : null}
    </div>
  )
}

export default TableActions
