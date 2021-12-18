import { Container } from './styles'

interface IProps {
  placeholder: string
  onChange: (search: string) => void
  value: string
}
export const SearchBox = ({ placeholder, onChange, value }: IProps) => {
  return (
    <Container>
      <form>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => {
            onChange(e.target.value)
          }}
        />
      </form>
    </Container>
  )
}
