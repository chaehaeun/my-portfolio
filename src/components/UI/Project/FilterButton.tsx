interface FilterButtonProps {
  children: React.ReactNode
}

const FilterButton = ({ children }: FilterButtonProps) => {
  return <button type="button">{children}</button>
}

export default FilterButton
