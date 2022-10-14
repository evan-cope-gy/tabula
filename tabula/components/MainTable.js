import { Container, Table, Icon } from "semantic-ui-react"
import streamingTitlesData from "../data/titles.json"

const SampleTable = () => {
  // List of header to include in the table:
  const tableHeaders = [
    "ShowID",
    "Title",
    "Type",
    "Director",
    "Cast",
    "Country",
    "Release Year",
    "Date Added",
    "Rating",
    "Duration",
    "Genres",
    "Description",
    "Platform",
  ]

  // A sample chunk of data to load into the table:
  const tableData = streamingTitlesData.titles.slice(0, 10)

  return (
    <Table
      celled
      // compact
      compact="very"
      padded
    >
      <Table.Header>
        <Table.Row>
          {tableHeaders.map((header) => (
            <Table.HeaderCell>{header}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableData.map((row) => (
          <Table.Row>
            <Table.Cell>{row.show_id}</Table.Cell>
            <Table.Cell>{row.title}</Table.Cell>
            <Table.Cell>{row.type}</Table.Cell>
            <Table.Cell>{row.director}</Table.Cell>
            <Table.Cell>{row.cast}</Table.Cell>
            <Table.Cell>{row.country}</Table.Cell>
            <Table.Cell>{row.release_year}</Table.Cell>
            <Table.Cell>{row.date_added}</Table.Cell>
            <Table.Cell>{row.rating}</Table.Cell>
            <Table.Cell>{row.duration}</Table.Cell>
            <Table.Cell>{row.genres}</Table.Cell>
            <Table.Cell>{row.description}</Table.Cell>
            <Table.Cell>{row.platform}</Table.Cell>
          </Table.Row>
        ))}

        {/* <Table.Row>
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
        </Table.Row> */}
      </Table.Body>
    </Table>
  )
}

export default SampleTable
