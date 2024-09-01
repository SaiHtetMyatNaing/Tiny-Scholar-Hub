import { z } from "zod";

export const EditFormSchema = z.object({
  id: z.number().readonly(),
  created_at: z.string().min(1 , {message : 'Required Field}'}),
  name_mm: z.string().min(1 , {message : 'Myanmar name is required'}), 
  name_en: z.string().min(1 , {message : 'English name is required'}),
  svg_content: z.string().url({message : "Please Put a valid URL"}),
  updated_at: z.string().min(1 , {message : 'Required Field}'}),
  start_with: z.string().length(1, {
    message: "start_with must be a single character",
  }),
});
