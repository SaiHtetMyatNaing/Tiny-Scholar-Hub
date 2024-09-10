import { ColumnDef } from "@tanstack/react-table";
import { Box } from "@mui/material";
import Image from "next/image";
import { StorySegment } from "@/app/lib/story-data";
import EditDialogSlide from "./edit-dialog";
import DeleteDialog from "./delete-dialog";
import CreateDialogSlide from "./create-dialog";
import StorySegmentForm from "../Form/story-create-form";
import StoryEditForm from "../Form/story-edit-form";

export const StorySegmentColumns: ColumnDef<StorySegment>[] = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Sentences",
    accessorKey: "sentences",
    cell: ({ row }) => {
      const sentences = row.original.sentences;
      return (
        <Box  className='max-h-[10em] overflow-hidden cursor-pointer select-none'>
          {sentences.map((item, index) => (
            <p key={index}>{item.sentence}</p>
          ))}
        </Box>
      );
    },
  },
  {
    header: "Image URL",
    accessorKey: "image",
    cell: ({ row }) => {
      return <Box>{row.original.image}</Box>;
    },
  },
  {
    header: "Product Control",
    accessorKey: "options",
    cell: ({ row }) => {
      return (
        <Box className="flex gap-2">
          <EditDialogSlide title="Edit">
            <StoryEditForm formData={row.original} />
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
        <StorySegmentForm />
      </CreateDialogSlide>
    ),
    accessorKey: "action",
    size: 30,
  },
];
