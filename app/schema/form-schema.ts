import { z } from "zod";

export const EditFormSchema = z.object({
  id: z.number().readonly(),
  created_at: z.string().min(1 , {message : 'Required Field}'}),
  name_mm: z.string().min(1 , {message : 'Myanmar name is required'}), 
  name_en: z.string().min(1 , {message : 'English name is required'}),
  image_url: z.string(),
  updated_at: z.string().min(1 , {message : 'Required Field}'}),
  character: z.string().length(1, {
    message: "start_with must be a single character",
  }),
});
