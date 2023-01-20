import React, { ReactNode, useEffect, useState } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {ArrowRightLine, ArrowLeftLine} from "./Icons";
import colors from "./Colors";

const columnHelper = createColumnHelper<any>()

interface column {
    title: string,
    dataIndex: string,
    key: string,
    render?: (val: any) => ReactNode
}

export interface TableProps {
    columns: column[],
    data: any[],
    tableTitle?: string;
    extraContent: ReactNode,
}

export const Table = ({ columns, data, tableTitle, extraContent }: TableProps) => {
    const [tableData, setTableData] = useState<any[]>([])
    const [tableColumns, setNewColumns] = useState<any[]>([]);
    const table = useReactTable({
        data: tableData,
        columns: tableColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    useEffect(() => {
        if (columns.length) {
            const newColumns = columns.map((column) => (
                columnHelper.accessor(column.dataIndex, {
                    cell: info => column?.render?.(info.getValue()) || info.getValue(),
                    header: () => <span>{column.title}</span>,
                })
            ));
            setNewColumns(newColumns);
        }
    }, [columns])

    useEffect(() => {
        if (data.length) {
            setTableData(data);
        }
    }, [data])

  return(
      <div className="rounded border-[1px] border-gray-200">
          {
              (tableTitle || extraContent) && <div className="flex flex-row border-b-[1px] border-gray-200 p-[15px] justify-between">
                  <span className="text-sm leading-4 font-semibold text-gray-800">{tableTitle}</span>
                  {extraContent}
              </div>
          }

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
          <div className="flex flex-row  p-[15px] justify-between">
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
                  <button className="mr-2.5"><ArrowLeftLine color={colors.gray["600"]} size={14} /></button>
                  <button><ArrowRightLine color={colors.orange["600"]} size={14} /></button>
              </div>
          </div>
      </div>
  );
}