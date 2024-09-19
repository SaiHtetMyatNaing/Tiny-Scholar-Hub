import { ColumnDef } from "@tanstack/react-table";
import { Box } from "@mui/material";
import EditDialogSlide from "./edit-dialog";
import DeleteDialog from "./delete-dialog";
import CreateDialogSlide from "./create-dialog";
import StorySegmentForm from "../Form/story-create-form";
import StoryEditForm from "../Form/story-edit-form";
import { StorySegmentProps } from "@/app/lib/type";

export const StorySegmentColumns: ColumnDef<StorySegmentProps>[] = [
  {
    header: "Id",
    accessorKey: "id",
    minSize: 10,
  },

  {
    header: "Title",
    accessorKey: "title",
    minSize: 160,
  },
  {
    header: "Story Id",
    accessorKey: "story id",
    minSize: 160,
    cell: ({ row }) => {
      const id = row.original.story_id;
      return (
        <Box className="max-h-[10em]  overflow-hidden cursor-pointer select-none">
          {id && id}
        </Box>
      );
    },
  },
  {
    header: "Sentences",
    accessorKey: "sentences",
    minSize: 600,

    cell: ({ row }) => {
      const sentences = row.original.sentences.sentences;
      return (
        <Box className="max-h-[10em] overflow-hidden cursor-pointer select-none">
          {sentences?.map((item, index) => (
            <p key={index}>{item.sentence}</p>
          ))}
        </Box>
      );
    },
  },
  {
    header: "Image URL",
    accessorKey: "image",
    minSize: 300,
    cell: ({ row }) => {
      return <Box className='max-w-md overflow-x-auto scrollbar-hide'>{row?.original.image_url}</Box>;
    },
  },
  {
    header: "Product Control",
    accessorKey: "options",
    cell: ({ row }) => {
      return (
        <Box className="flex gap-2">
          <EditDialogSlide dialogTitle="Edit">
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
