import React from "react";
import { Button, TextField, Stack, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const storySegmentSchema = z.object({
  id: z.number().positive(),
  sentences: z.array(
    z.object({
      sentence : z.string().min(1)
    })),
  image: z.string().url().optional(),
});

type StorySegment = z.infer<typeof storySegmentSchema>;

const StorySegmentForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StorySegment>({
    resolver : zodResolver(storySegmentSchema),
    defaultValues: {
      id: 0,
      sentences: [{ sentence: '' }],
      image: "",
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sentences",
  });

  const onSubmit = (data: StorySegment) =>
    console.log("Submitted segment:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} width={450}>
        {/* ID field */}

        <TextField
          {...register("id")}
          label="ID"
          type="number"
          fullWidth
          error={!!errors.id}
          helperText={errors?.id?.message}
        />

        {/* Sentences fields */}
        {fields.map((field, index) => (
          <Stack key={field.id} direction="row" spacing={1}>
            <TextField
              {...register(`sentences.${index}`)}
              label={`Sentence ${index + 1}`}
              fullWidth
              multiline
              rows={2}
              error={!!errors.sentences?.[index]}
              helperText={errors.sentences?.[index]?.message}
            />

            <IconButton onClick={() => remove(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}

        {/* Add Sentence button */}
        <Button
          startIcon={<AddIcon />}
          variant="outlined"
          onClick={()=>append({sentence : ' '})}
          disabled={fields.length >= 4}
        >
          Add Sentence
        </Button>

        {/* Image URL field */}

        <TextField
          {...register("image")}
          label="Image URL"
          fullWidth
          error={!!errors.image}
          helperText={errors?.image?.message}
        />

        {/* Submit button */}
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "var(--primary-gold)",
            color: "black",
            ":hover": {
              backgroundColor: "var(--primary-gold-foreground)",
            },
          }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default StorySegmentForm;
