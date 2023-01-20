import React from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {ArrowRightLine, ArrowLeftLine} from "./Icons";
import colors from "./Colors";

type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}

const defaultData: Person[] = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.accessor('firstName', {
        cell: info => info.getValue(),
        header: () => <span>First Name</span>,
    }),
    columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
    }),
    columnHelper.accessor('visits', {
        header: () => <span>Visits</span>,
    }),
    columnHelper.accessor('status', {
        header: 'Status',
    }),
    columnHelper.accessor('progress', {
        header: 'Profile Progress',
    }),
]
export interface TableProps {
}

export const Table = ({  }: TableProps) => {
    const [data] = React.useState(() => [...defaultData])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

  return(
      <div className="rounded border-[1px] border-gray-200">
          <div className="flex flex-row border-b-[1px] border-gray-200 p-[15px]">
              <span className="text-sm leading-4 font-semibold text-gray-800">Recent Orders</span>
          </div>
          <table className="w-full">
              <thead>
              {table.getHeaderGroups().map(headerGroup => (
                  <tr className="text-left" key={headerGroup.id}>
                      {headerGroup.headers.map((header, index) => (
                          <th key={header.id}
                              className={`text-xs leading-4 font-semibold text-gray-600 border-b-[1px] border-gray-200 py-[15px] py-[15px] ${index === 0 ? 'pl-[15px]' : headerGroup.headers.length - 1 === index ? '' : 'pr-[15px]'}`}
                          >
                              {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                  )}
                          </th>
                      ))}
                  </tr>
              ))}
              </thead>
              <tbody>
              {table.getRowModel().rows.map(row => (
                  <tr key={row.id}
                      className="text-xs leading-4 font-normal text-gray-800 border-b-[1px] border-gray-200"
                  >
                      {row.getVisibleCells().map((cell, index) => (
                          <td className={`py-[15px] ${index === 0 ? 'pl-[15px]' : row.getVisibleCells.length -1 === index ? '' : 'pr-[15px]'}`}
                              key={cell.id}>
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                      ))}
                  </tr>
              ))}
              </tbody>
              <tfoot>
              {table.getFooterGroups().map(footerGroup => (
                  <tr key={footerGroup.id}>
                      {footerGroup.headers.map(header => (
                          <th key={header.id}>
                              {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.footer,
                                      header.getContext()
                                  )}
                          </th>
                      ))}
                  </tr>
              ))}
              </tfoot>
          </table>
          <div className="flex flex-row border-b-[1px] border-gray-200 p-[15px] justify-between">
              <div>
                  <span className="text-xs leading-4 font-normal text-gray-500 mr-1">Showing</span>
                  <span className="text-xs leading-4 font-semibold text-gray-800 mr-1">1</span>
                  <span className="text-xs leading-4 font-normal text-gray-500 mr-1">to</span>
                  <span className="text-xs leading-4 font-semibold text-gray-800 mr-1">15</span>
                  <span className="text-xs leading-4 font-normal text-gray-500 mr-1">of</span>
                  <span className="text-xs leading-4 font-semibold text-gray-800 mr-1">12</span>
                  <span className="text-xs leading-4 font-normal text-gray-500 mr-1">results</span>
              </div>

              <div>
                  <button className="mr-2.5"><ArrowLeftLine color={colors.orange["600"]} size={14} /></button>
                  <button><ArrowRightLine color={colors.orange["600"]} size={14} /></button>
              </div>
          </div>
      </div>
  );
}