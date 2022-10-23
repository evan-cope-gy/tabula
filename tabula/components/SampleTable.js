// import styles from "../styles/SampleTable.module.css"

const SampleTable = () => {
  return (
    <Table
      celled
      // striped
      // compact
      compact="very"
      padded
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className="bg-gray-500">Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>No Name Specified</Table.Cell>
          <Table.Cell>Unknown</Table.Cell>
          <Table.Cell className="bg-negative">Negative Event</Table.Cell>
        </Table.Row>

        <Table.Row className="bg-positive">
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
          <Table.Cell className="bg-warning">
            <Icon name="close" />
            Requires Call
          </Table.Cell>
        </Table.Row>

        <Table.Row className="bg-negative">
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Unknown</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>

        <Table.Row className="bg-warning">
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
          <Table.Cell className="bg-warning">
            <Icon name="attention" />
            Hostile
          </Table.Cell>
        </Table.Row>
        <Table.Row disabled>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Disabled Contents</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default SampleTable
