import { Table } from "rsuite"

const { Column, HeaderCell, Cell } = Table

const DataTable = ({ data, isLoading, isError, ...props }) => {
  const handleRowClick = (rowData) => {
    console.log("Row clicked: ", { rowData })
  }

  if (isError) {
    return <div>Error!</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <Table
      {...props}
      className=""
      loading={isLoading}
      data={data}
      bordered
      cellBordered
      onRowClick={handleRowClick}
    >
      <Column
        className="collapse"
        width={0}
      >
        <HeaderCell className="font-bold">pk</HeaderCell>
        <Cell
          className=""
          dataKey="pk"
        />
      </Column>

      <Column flexGrow={4}>
        <HeaderCell className="font-bold">Title</HeaderCell>
        <Cell dataKey="title" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell className="font-bold">Type</HeaderCell>
        <Cell dataKey="type" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell className="font-bold">Director</HeaderCell>
        <Cell dataKey="director" />
      </Column>

      {/* <Column
        flexGrow={3}
      >
        <HeaderCell className="font-bold">Cast</HeaderCell>
        <Cell dataKey="cast"  />
      </Column> */}

      <Column
        className="collapse"
        width={0}
      >
        <HeaderCell className="font-bold">Country</HeaderCell>
        <Cell dataKey="country" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell className="font-bold">Release Year</HeaderCell>
        <Cell dataKey="release_year" />
      </Column>

      <Column
        className="collapse"
        width={0}
      >
        <HeaderCell className="font-bold">Rating</HeaderCell>
        <Cell dataKey="rating" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell className="font-bold">Genres</HeaderCell>
        <Cell dataKey="genres" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell className="font-bold">Platform</HeaderCell>
        <Cell dataKey="platform" />
      </Column>

      <Column fixed="right">
        <HeaderCell className="font-bold">...</HeaderCell>
        <Cell>
          {(rowData) => (
            <span>
              <a onClick={() => alert(`id:${rowData.show_id}`)}> Edit </a>
            </span>
          )}
        </Cell>
      </Column>
    </Table>
  )
}

export default DataTable
