import { Container, Header as SemanticHeader } from "semantic-ui-react"

const Header = () => {
  return (
    <Container className="my-3 p-1 outline-dashed outline-2">
      <SemanticHeader as="h1">TEST Header</SemanticHeader>
    </Container>
  )
}

export default Header
