import { useState, useEffect } from "react"
import { Table, Tag, Loader, Message } from "rsuite"
import cls from "classnames"
import styles from "../styles/DataTable.module.css"
const { Column, HeaderCell, Cell } = Table

const HiddenColumn = ({ children, ...props }) => {
  return (
    <Column
      {...props}
      className="collapse"
      width={0}
    >
      {children}
    </Column>
  )
}

const CustomHeaderCell = ({ children, ...props }) => {
  return (
    <HeaderCell
      {...props}
      className="font-bold "
    >
      {children}
    </HeaderCell>
  )
}

const CustomCell = (props) => {
  return (
    <Cell
      {...props}
      className=""
      style={{ padding: 4 }}
    >
      {children}
    </Cell>
  )
}

const DataTable = ({ compact, data, isLoading, isError, ...props }) => {
  const getPlatformLabelColor = (platform) => {
    switch (platform) {
      case "Netflix":
        return "red"
      case "Hulu":
        return "green"
      case "Disney+":
        return "cyan"
      case "Amazon Prime":
        return "yellow"
      default:
        return ""
    }
  }

  const handleRowClick = (rowData) => {
    console.log("* Row clicked: ", { rowData })
  }

  if (isError) {
    return (
      <div>
        <Message
          showIcon
          type="error"
          header="Error"
        >
          There was an error loading the data.
        </Message>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div>
        <Loader
          center
          content="Loading..."
          size="md"
          speed="normal"
          className=""
        />
      </div>
    )
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
      headerHeight={compact ? 30 : 40}
      rowHeight={compact ? 30 : 46}
    >
      <Column
        className="collapse"
        width={0}
      >
        <HeaderCell>pk</HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
          dataKey="pk"
        />
      </Column>

      <Column flexGrow={4}>
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          Title
        </HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
          dataKey="title"
        />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          Type
        </HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
        >
          {(rowData) => {
            return (
              <Tag
                size="md"
                color={rowData.type === "Movie" ? "blue" : "green"}
              >
                {rowData.type}
              </Tag>
            )
          }}
        </Cell>
      </Column>

      <Column
        flexGrow={2}
        fullText
      >
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          Director
        </HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
        >
          {(rowData) => {
            if (rowData.director) {
              return rowData.cast.join(", ")
            } else {
              return "..."
            }
          }}
        </Cell>
      </Column>

      <Column
        flexGrow={2}
        fullText
      >
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          Cast
        </HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
        >
          {(rowData) => {
            if (rowData.cast) {
              return rowData.cast.join(", ")
            } else {
              return "..."
            }
          }}
        </Cell>
      </Column>

      <Column
        className="collapse"
        width={0}
      >
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          Country
        </HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
          dataKey="country"
        />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          Release Year
        </HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
          dataKey="release_year"
        />
      </Column>

      <Column
        className="collapse"
        width={0}
      >
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          Rating
        </HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
          dataKey="rating"
        />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          Genres
        </HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
        >
          {(rowData) => {
            if (rowData.genres) {
              return rowData.genres.join(", ")
            } else {
              return "..."
            }
          }}
        </Cell>
      </Column>

      <Column flexGrow={1}>
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          Platform
        </HeaderCell>
        <Cell
          className=""
          style={{ padding: 4 }}
        >
          {(rowData) => {
            return (
              <Tag
                size="md"
                color={getPlatformLabelColor(rowData.platform)}
              >
                {rowData.platform}
              </Tag>
            )
          }}
        </Cell>
      </Column>

      <Column fixed="right">
        <HeaderCell
          className="font-bold "
          style={{ padding: 4 }}
        >
          ...
        </HeaderCell>
        <Cell
          className="text-center"
          style={{ padding: 4 }}
        >
          {(rowData) => (
            <span className="hover:font-medium">
              <a onClick={() => alert(`id:${rowData.show_id}`)}> Edit </a>
            </span>
          )}
        </Cell>
      </Column>
    </Table>
  )
}

export default DataTable
