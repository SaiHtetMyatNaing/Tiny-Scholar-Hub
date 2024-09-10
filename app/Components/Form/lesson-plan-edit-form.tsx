import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, IconButton, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

// Define a Zod schema to validate the form data.
// The form consists of an array of objects, each containing a 'sentence' field.
const arraySchema = z.object({
  sentences: z.array(
    z.object({
      sentence: z.string().min(1), // Each sentence must be at least 1 character long
    })
  ),
});

// Define a type alias for the inferred type of the schema
type PlanProps = z.infer<typeof arraySchema>;

// Define the props for the GenericForm component
interface GenericFormProps {
  onSubmit: (data: PlanProps) => void; // Function to handle form submission
  formData: PlanProps; // Initial form data
}

export const LessonPlanEditForm = ({
  onSubmit,
  formData,
}: GenericFormProps) => {
  // Initialize the react-hook-form with Zod schema validation and default values
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanProps>({
    resolver: zodResolver(arraySchema), // Use Zod resolver for validation
    defaultValues: {
      sentences: formData.sentences,
    },
  });

  // Use useFieldArray hook to manage the array of sentence fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sentences",
  });

  return (
    // Render the form
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Stack spacing={2}>
        {/* Map through the sentence fields and render input fields for each */}
        {fields.map((field, index) => (
          <Stack key={field.id} direction="row" spacing={1} alignItems="center">
            {/* Use Controller to connect each input field to react-hook-form */}
            <Controller
              name={`sentences.${index}.sentence`}
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{
                    width: "50em", // This sets the width explicitly to 40em (approximately 640px)
                  }}
                  {...field} // Spread the field props onto the TextField
                  label={`Item ${index + 1}`}
                  fullWidth
                  error={!!errors.sentences?.[index]} // Show error if present
                  value={field.value}
                  helperText={errors.sentences?.[index]?.message} // Display error message
                />
              )}
            />

            {/* Add a delete button to remove the sentence field */}
            <IconButton onClick={() => remove(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}

        {/* Add a button to append a new sentence field, disabled if there are already 4 fields */}
        <Button
          startIcon={<AddIcon />}
          variant="outlined"
          onClick={() => append({ sentence: "" })}
          disabled={fields.length >= 4}
        >
          Add Item
        </Button>

        {/* Add a submit button to submit the form */}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
};
