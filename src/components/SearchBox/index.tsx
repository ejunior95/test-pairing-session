import { FaSearch } from 'react-icons/fa'
import { Container } from './styles'

interface IProps {
  placeholder: string
  onChange: (search: string) => void
  value: string
}
export const SearchBox = ({ placeholder, onChange, value }: IProps) => {
  return (
    <Container>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => {
          onChange(e.target.value)
        }}
      />
      <FaSearch className="search-icon" />
    </Container>
  )
}
