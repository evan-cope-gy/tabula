/*
    A basic table component with minimal features.
*/
import DataTable from 'react-data-table-component';
// import cls from "classnames"

const BasicDataTable = ({ columns, data, ...props }) => {

  return (
    <DataTable
      columns={columns}
      data={data}
      className="shadow-lg border border-solid border-zinc-200"
    />
  )
}

export default BasicDataTable
