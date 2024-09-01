import { ColumnDef } from "@tanstack/react-table";
import { Box } from "@mui/material";
import { MockDataProps } from "@/app/types/mock-data";
import EditDialogSlide from "./edit-dialog";
import DeleteDialog from "./delete-dialog";
import CreateDialogSlide from "./create-dialog";


export const columns: ColumnDef<MockDataProps>[] = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Myanmar Name",
    accessorKey: "name_mm",
  },
  {
    header: "English Name",
    accessorKey: "name_en",
  },
  {
    header: "SVG",
    accessorKey: "svg_content",
  },
  {
    header: "Start With",
    accessorKey: "start_with",
  },
  {
    header: "Created At",
    accessorKey: "created_at",
  },
  {
    header: "Updated At",
    accessorKey: "updated_at",
  },
  {
    header: "Product Control",
    accessorKey : 'options',
    cell: ({ row }) => {
      return (
        <Box className="flex gap-2">
          <EditDialogSlide formData={row.original} />
          <DeleteDialog id={row.original.id} />
        </Box>
      );
    },
  },
  {
    id : 'action',
    header : ()=> <CreateDialogSlide/>,
    accessorKey : 'action',
    size : 30,
  }
];
