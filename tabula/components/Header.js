import { Container, Header as SemanticHeader } from "semantic-ui-react"

const Header = () => {
  return (
    <Container className="my-3 p-1">
      <SemanticHeader as="h1">Tabula Rasa</SemanticHeader>
    </Container>
  )
}

export default Header
