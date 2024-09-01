import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { z } from "zod";
import { EditFormSchema } from "@/app/schema/form-schema";
import { zodResolver } from '@hookform/resolvers/zod';
type FormData = z.infer<typeof EditFormSchema>;

export interface EditFormProps {
  // handleClose: () => void;
  formData: FormData;
}

const CreateForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: errors,
  } = useForm<FormData>({
    defaultValues: {
      id: 1,
      created_at: "",
      name_en: "",
      name_mm: "",
      svg_content: "",
      updated_at: "",
      start_with: "",
    },
    resolver: zodResolver(EditFormSchema),
  });

  const onFormSubmit = (value: FormData) => {
    console.log(value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-3">
      <Stack spacing={3} width={450}>
        <TextField
          label="id"
          type="number"
          {...register("id")}
          error={!!errors.errors.id}
          helperText={errors.errors.id?.message}
          aria-readonly={true}
        />
        <TextField
          label="Created At"
          type="text"
          {...register("created_at")}
          error={!!errors.errors.created_at}
          helperText={errors.errors.created_at?.message}
        />
        <TextField
          label="Name_en"
          type="text"
          {...register("name_en")}
          error={!!errors.errors.name_en}
          helperText={errors.errors.name_en?.message}
        />
        <TextField
          label="Name_mm"
          type="text"
          {...register("name_mm")}
          error={!!errors.errors.name_mm}
          helperText={errors.errors.name_mm?.message}
        />
        <TextField
          label="SVG URl"
          type="text"
          {...register("svg_content")}
          error={!!errors.errors.svg_content}
          helperText={errors.errors.svg_content?.message}
        />
        <TextField
          label="Updated At"
          type="text"
          {...register("updated_at")}
          error={!!errors.errors.updated_at}
          helperText={errors.errors.updated_at?.message}
        />
        <TextField
          label="Starts With"
          type="text"
          {...register("start_with")}
          error={!!errors.errors.start_with}
          helperText={errors.errors.start_with?.message}
        />
      </Stack>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--primary-gold)",
          color: "black",
          ":hover": {
            backgroundColor: "var(--primary-gold-foreground)",
          },
        }}
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default CreateForm;
