import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import cls from "classnames"

const BasicDataTable = ({ columns, data, ...props }) => {

  const tabula = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() })

  return (
      <div className="p-2">
        <table className="table-auto border-collapse border border-zinc-400 shadow">
          <thead>
            { tabula.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-zinc-300">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-zinc-400 py-1 px-2 uppercase text-zinc-800"
                  >
                    { header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                        header.getContext()
                      )
                    }
                    </th>
                ))}

              </tr>
            ))}
          </thead>

          <tbody>
            { tabula.getRowModel().rows.map((row, rowIndex) => (
              <tr
                key={row.id}
                className={cls(
                  `${props.striped ? (rowIndex % 2 !== 0 ? "bg-neutral-200/50": "bg-white") : "bg-gray-50"}`
                )}
              >
                { row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="border border-zinc-400 py-1 px-3">
                    { flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default BasicDataTable
