/*
    A basic table component with minimal features.
*/
import DataTable from "react-data-table-component"
import cls from "classnames"

const BasicDataTable = ({ columns, data, className, ...props }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      className={cls(`${className}`, "shadow-lg ")}
      title={props?.title}
      theme={props?.theme}
      customStyles={props?.customStyles}
      highlightOnHover={props?.highlightOnHover}
      dense={props?.dense}
      striped={props?.striped}
      responsive={props?.responsive}
    />
  )
}

export default BasicDataTable
