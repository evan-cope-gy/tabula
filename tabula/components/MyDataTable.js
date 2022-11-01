import { Col, Table } from "rsuite"

const { Column, HeaderCell, Cell } = Table

const DataTable = ({ data, isLoading, isError, ...props }) => {
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

  const handleRowClick = (rowData) => {
    console.log("Row clicked: ", { rowData })
  }

  // if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error!</div>
  return (
    <Table
      {...props}
      className=""
      style={{ width: "100%" }}
      loading={isLoading}
      data={data}
      bordered
      cellBordered
      onRowClick={handleRowClick}
    >
      <Column>
        <HeaderCell>Show Id</HeaderCell>
        <Cell dataKey="show_id" />
      </Column>

      <Column resizable>
        <HeaderCell>Title</HeaderCell>
        <Cell dataKey="title" />
      </Column>

      <Column>
        <HeaderCell>Type</HeaderCell>
        <Cell dataKey="type" />
      </Column>

      <Column>
        <HeaderCell>Director</HeaderCell>
        <Cell dataKey="director" />
      </Column>

      <Column>
        <HeaderCell>Cast</HeaderCell>
        <Cell dataKey="cast" />
      </Column>

      <Column>
        <HeaderCell>Country</HeaderCell>
        <Cell dataKey="country" />
      </Column>

      <Column fixed="right">
        <HeaderCell>...</HeaderCell>
        <Cell>
          {(rowData) => (
            <span>
              <a onClick={() => alert(`id:${rowData.id}`)}> Edit </a>
            </span>
          )}
        </Cell>
      </Column>
    </Table>
  )
}

export default DataTable
