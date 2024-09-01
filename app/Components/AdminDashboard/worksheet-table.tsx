'use client'
import { data } from "@/app/lib/mock-data";
import { MockDataProps } from "@/app/types/mock-data";
import React, { useMemo } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";


export default function WorksheetTable  () {
  const columnsData: MockDataProps[] = useMemo(() => {
    return data;
  }, []); // To prevent from recreating

  return <DataTable columns={columns} data={columnsData} />;
};
