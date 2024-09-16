import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { z } from "zod";
import { EditFormSchema } from "@/app/schema/form-schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { FlashcardProps } from "@/app/lib/type";
type FormData = z.infer<typeof EditFormSchema>;

export interface EditFormProps {
  formData: FormData;
}

const ImageCreationForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: errors,
  } = useForm<FlashcardProps>({
    resolver: zodResolver(EditFormSchema),
  });

  const onFormSubmit = (value: FlashcardProps) => {
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
          {...register("image_url")}
          error={!!errors.errors.image_url}
          helperText={errors.errors.image_url?.message}
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
          {...register("character")}
          error={!!errors.errors.character}
          helperText={errors.errors.character?.message}
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

export default ImageCreationForm;
