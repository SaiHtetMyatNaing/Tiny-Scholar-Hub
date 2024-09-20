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
    enableSorting : false,
  },
  {
    header: "Character id",
    accessorKey: "character_id",
    minSize: 120,
    cell: ({ row }) => {
      const character_id = row.original.character_id;
      return <Box className="flex gap-2">{character_id}</Box>;
    },
  },
  {
    header: "Image Url",
    accessorKey: "image_url",
    maxSize: 100,
    cell: ({ row }) => {
      const image_url = row.original.image_url;
      return (
        <Box className="flex gap-2 max-w-md overflow-scroll scrollbar-hide cursor-pointer">
          {image_url}
        </Box>
      );
    },
  },
  {
    header: "Character",
    accessorKey: "character",
    cell: ({ row }) => {
      const character = row.original.character;
      return <Box className="flex gap-2 cursor-pointer">{character}</Box>;
    },
  },
  {
    header: "Product Control",
    accessorKey: "options",
    cell: ({ row }) => {
      return (
        <Box className="flex gap-2">
          <EditDialogSlide dialogTitle="Update">
            <ImageEditForm formData={row.original}/>
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
