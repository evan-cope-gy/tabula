import { Container, Table, Icon } from "semantic-ui-react"

const SampleTable = () => {
  return (
    <Container>
      <Table
        celled
        // striped
        // compact
        compact="very"
        padded
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>No Name Specified</Table.Cell>
            <Table.Cell>Unknown</Table.Cell>
            <Table.Cell negative>None</Table.Cell>
          </Table.Row>

          <Table.Row positive>
            <Table.Cell>Jimmy</Table.Cell>
            <Table.Cell>
              <Icon name="checkmark" />
              Approved
            </Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Unknown</Table.Cell>
            <Table.Cell positive>
              <Icon name="close" />
              Requires call
            </Table.Cell>
          </Table.Row>

          <Table.Row negative>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>Unknown</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>

          <Table.Row warning>
            <Table.Cell>Jimmy</Table.Cell>
            <Table.Cell>
              <Icon name="attention" />
              Requires Action
            </Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Unknown</Table.Cell>
            <Table.Cell warning>
              <Icon name="attention" />
              Hostile
            </Table.Cell>
          </Table.Row>
          <Table.Row disabled>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>Requires call</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  )
}

export default SampleTable
