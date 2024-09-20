"use client";
import * as React from "react";

import Paper from "@mui/material/Paper";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Box,
} from "@mui/material";
import useDebounce from "@/app/hooks/useDebounce";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [filtering, setFiltering] = React.useState<string>(""); // Global Filtering
  const debounceFiltering = useDebounce<string>(filtering, 280); // To reduce client-side rendering and server-side loading

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel : getSortedRowModel(),
    onGlobalFilterChange: setFiltering,
    enableSorting : false,
    state: {
      globalFilter: debounceFiltering, //To reduce unnecessary rendering
    },
    defaultColumn: {
      size: 60,
    },
  });

  return (
    <TableContainer component={Paper} className="p-2 h-dvh scrollbar-hide">
      <Box className="flex items-center justify-between mx-auto">
        <TextField
          type="text"
          variant="standard"
          label="Filter"
          size="medium"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
      </Box>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          {table.getHeaderGroups().map((headerGroup , index) => {
            return (
              <TableRow key={index}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell
                      key={header.id}
                      style={{
                        width: header.column.getSize(),
                        minWidth: header.column.columnDef.minSize,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row ,index) => (
              <TableRow key={index}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>No Results</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
