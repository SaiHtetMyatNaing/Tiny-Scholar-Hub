import React from "react";
import { Button, TextField, Stack, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "module";
import { StorySegmentProps } from "@/app/lib/type";

// Defining StorySegment schema using Zod
const storySegmentSchema = z.object({
  id: z.number().positive(),
  story_slide: z.number().positive(),
  story_id: z.number().positive(),
  sentences: z.array(
    z.object({
      sentence: z.string().min(1),
    })
  ),
  image_url: z.string().url(),
});

type StoryProps = z.infer<typeof storySegmentSchema>;

const StoryEditForm = ({ formData }: { formData: StorySegmentProps }) => {
  // Using useForm with Zod resolver
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<StoryProps>({
    resolver: zodResolver(storySegmentSchema),
    defaultValues: {
      ...formData,
      sentences: formData.sentences.sentences,
    },
  });

  // Using useFieldArray to manage the sentences array
  const { fields, remove, append } = useFieldArray({
    control,
    name: "sentences",
  });

  const onSubmit = (data: StoryProps) => {
    console.log("Submitted segment:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          maxWidth: "100%",
          padding: 2,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            width: {
              xs: "100%",
            },
          }}
        >
          <Controller
            name="id"
            control={control}
            render={({ field }) => (
              <TextField
                {...field} // Spread the field props onto the TextField
                label="ID"
                type="number"
                fullWidth
                error={!!errors.id}
                helperText={errors.id?.message}
                className="w-[94%]"
              />
            )}
          />

          {fields.map((field, index) => (
            <Stack key={field.id} direction="row" spacing={1}>
              <Controller
                name={`sentences.${index}.sentence`}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={`Sentence ${index + 1}`}
                    fullWidth
                    multiline
                    rows={2}
                    error={!!errors.sentences?.[index]?.sentence}
                    helperText={errors.sentences?.[index]?.sentence?.message}
                    // Making sure to set the value to field.value
                    value={field.value}
                  />
                )}
              />

              <IconButton onClick={() => remove(index)} color="error">
                <DeleteIcon />
              </IconButton>
            </Stack>
          ))}

          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            onClick={() => append({ sentence: "" })}
            disabled={fields.length >= 4}
          >
            Add Sentence
          </Button>

          <TextField
            {...register("image_url")}
            label="Image URL"
            fullWidth
            error={!!errors.image_url}
            helperText={errors.image_url?.message}
          />

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
      </Box>
    </form>
  );
};

export default StoryEditForm;
