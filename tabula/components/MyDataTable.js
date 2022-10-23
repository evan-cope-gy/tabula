import { Table } from "rsuite"
import streamingTitlesData from "../data/titles.json"

const DataTable = () => {
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
      className=""
      style={{ width: "100%" }}
      loading={false}
      bordered
      cellBordered
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
        */}
      </Table.Body>
    </Table>
  )
}

export default DataTable
