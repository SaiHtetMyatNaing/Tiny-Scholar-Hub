"use client";
import { useForm, Controller } from "react-hook-form";
import { Button, Stack, TextField, Box } from "@mui/material";
import { z } from "zod";
import { EditFormSchema } from "@/app/schema/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FlashcardProps } from "@/app/lib/type";
import { supabase } from "@/app/utils/supabase-client";
import Toaster from "../toaster";
import { useState } from "react";
import { useDataMutationStore } from "@/app/store/useDataMutationStore";

// Define the type for the form data based on the Zod schema
type FormData = z.infer<typeof EditFormSchema>;

// Interface for the props that the EditForm component expects
export interface EditFormProps {
  // handleClose: () => void; // Commented out, might be used later
  formData: FlashcardProps; // Initial form data to populate the fields
}

const ImageEditForm = ({ formData }: EditFormProps) => {
  const [trigger, setTrigger] = useState<boolean>(false);
  // Initialize the react-hook-form with Zod schema validation and default values
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      ...formData,
    },
    resolver: zodResolver(EditFormSchema), // Use Zod for schema validation
  });

  const setHandleDataUpdate = useDataMutationStore(
    (state) => state.handleDataUpdate
  );
  // Function to handle form submission
  const onFormSubmit = async (value: FormData) => {
    // Reset the form after submission
    try {
      // Assuming 'id' is the primary key or a unique identifier for the flashcard
      const { data, error } = await supabase
        .from("flashcards")
        .update({
          name_mm: value.name_mm,
          name_en: value.name_en,
          image_url: value.image_url,
          character: value.character,
        })
        .eq("id", value.id)
        .select();

      if (error) {
        setTrigger(!trigger);

        console.error("Error updating flashcard:", error);
        // Optionally, display a more user-friendly error message
      } else {
        setTrigger(!trigger);
        setHandleDataUpdate;

        console.log("Flashcard updated successfully:", data);
      }
    } catch (error) {
      console.error("Unexpected error during flashcard update:", error);
    }
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
          name="character"
          control={control}
          render={({ field }) => (
            <TextField
              label="Starts With"
              type="text"
              {...field}
              error={!!errors.character}
              helperText={errors.character?.message}
              fullWidth
            />
          )}
        />
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
      {trigger && (
        <Toaster
          status="success"
          trigger={trigger}
          description="Successfully updated!"
        />
      )}
      {!trigger && (
        <Toaster
          status="error"
          trigger={trigger}
          description="Unexpected error occur!"
        />
      )}
    </Box>
  );
};

export default ImageEditForm;
