import { useForm, Controller } from "react-hook-form";
import { Button, Stack, TextField, Box } from "@mui/material";
import { z } from "zod";
import { EditFormSchema } from "@/app/schema/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FlashcardProps } from "@/app/lib/type";

// Define the type for the form data based on the Zod schema
type FormData = z.infer<typeof EditFormSchema>;

// Interface for the props that the EditForm component expects
export interface EditFormProps {
  // handleClose: () => void; // Commented out, might be used later
  formData: FlashcardProps; // Initial form data to populate the fields
}

const ImageEditForm = ({ formData }: EditFormProps) => {
  // Initialize the react-hook-form with Zod schema validation and default values
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      ...formData
    },
    resolver: zodResolver(EditFormSchema), // Use Zod for schema validation
  });

  // Function to handle form submission
  const onFormSubmit = (value: FormData) => {
    console.log(value); // Log the submitted form data
    reset(); // Reset the form after submission
  };

  return (
    // Main form container with styling
    <Box
      component="form"
      onSubmit={handleSubmit(onFormSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
        maxWidth: "100%",
        padding: 2,
      }}
    >
      {/* Stack to arrange form fields vertically */}
      <Stack spacing={3} sx={{ width: { xs: "100%" } }}>
        {/* Controller components to manage each form field with validation */}
        <Controller
          name="id"
          control={control}
          render={({ field }) => (
            <TextField
              label="id"
              type="number"
              {...field}
              error={!!errors.id}
              helperText={errors.id?.message}
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
              error={!!errors.created_at}
              helperText={errors.created_at?.message}
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
              error={!!errors.name_en}
              helperText={errors.name_en?.message}
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
              error={!!errors.name_mm}
              helperText={errors.name_mm?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="image_url"
          control={control}
          render={({ field }) => (
            <TextField
              label="SVG URl"
              type="text"
              {...field}
              error={!!errors.image_url}
              helperText={errors.image_url?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="updated_at"
          control={control}
          render={({ field }) => (
            <TextField
              label="Updated At"
              type="text"
              {...field}
              error={!!errors.updated_at}
              helperText={errors.updated_at?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="start_with"
          control={control}
          render={({ field }) => (
            <TextField
              label="Starts With"
              type="text"
              {...field}
              error={!!errors.start_with}
              helperText={errors.start_with?.message}
              fullWidth
            />
          )}
        />

        {/* ... other Controller components for the remaining fields ... */}
      </Stack>

      {/* Submit button with styling */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--primary-gold)",
          color: "black",
          ":hover": {
            backgroundColor: "var(--primary-gold-foreground)",
          },
          mt: 2,
        }}
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};

export default ImageEditForm;
