import { useForm ,Controller} from "react-hook-form";
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
    control
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
      <Controller
          name="id"
          control={control}
          render={({ field }) => (
            <TextField
              label="id"
              type="number"
              {...field}
              error={!!errors.errors.id}
              helperText={errors.errors.id?.message}
              fullWidth
              aria-readonly={true} 
            />
          )}
        />
       <Controller
          name="created_at"
          control={control}
          render={({ field }) => (
            <TextField
              label="Created At"
              type="text"
              {...field}
              error={!!errors.errors.created_at}
              helperText={errors.errors.created_at?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="created_at"
          control={control}
          render={({ field }) => (
            <TextField
              label="Created At"
              type="text"
              {...field}
              error={!!errors.errors.created_at} // Access error directly 
              helperText={errors.errors.created_at?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="name_en"
          control={control}
          render={({ field }) => (
            <TextField
              label="Name_en"
              type="text"
              {...field}
              error={!!errors.errors.name_en}
              helperText={errors.errors.name_en?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="name_mm"
          control={control}
          render={({ field }) => (
            <TextField
              label="Name_mm"
              type="text"
              {...field}
              error={!!errors.errors.name_mm}
              helperText={errors.errors.name_mm?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="image_url"
          control={control}
          render={({ field }) => (
            <TextField
              label="Image_Url"
              type="text"
              {...field}
              error={!!errors.errors.image_url}
              helperText={errors.errors.image_url?.message}
              fullWidth
            />
          )}
        />
       <Controller
          name="updated_at"
          control={control}
          render={({ field }) => (
            <TextField
              label="created_at"
              type="text"
              {...field}
              error={!!errors.errors.updated_at}
              helperText={errors.errors.updated_at?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="character"
          control={control}
          render={({ field }) => (
            <TextField
              label="character"
              type="text"
              {...field}
              error={!!errors.errors.character}
              helperText={errors.errors.character?.message}
              fullWidth
            />
          )}
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
