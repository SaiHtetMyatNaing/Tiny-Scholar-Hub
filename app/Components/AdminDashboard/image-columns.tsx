import { ColumnDef } from "@tanstack/react-table";
import { Box } from "@mui/material";
import CreateDialogSlide from "./create-dialog";
import ImageCreationForm from "../Form/image-create-form";
import ImageEditForm from "../Form/image-edit-form";
import { FlashcardProps } from "@/app/lib/type";
import EditDialogSlide from "./edit-dialog";
import DeleteDialog from "./delete-dialog";

export const ImageColumns: ColumnDef<FlashcardProps>[] = [
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
    header: "Image Url",
    accessorKey: "image_url",
    maxSize: 100,
  },
  {
    header: "Start With",
    accessorKey: "start_with",
    cell: ({ row }) => {
      const character = row.original.character;
      return <Box className="flex gap-2">{character}</Box>;
    },
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
    accessorKey: "options",
    cell: ({ row }) => {
      return (
        <Box className="flex gap-2">
          <EditDialogSlide dialogTitle="Edit">
            <ImageEditForm formData={row.original} />
          </EditDialogSlide>
          <DeleteDialog id={row.original.id} />
        </Box>
      );
    },
  },
  {
    id: "action",
    header: () => (
      <CreateDialogSlide>
        <ImageCreationForm />
      </CreateDialogSlide>
    ),
    accessorKey: "action",
    size: 30,
  },
];
