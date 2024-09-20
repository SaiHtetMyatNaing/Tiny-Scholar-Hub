import { Container, Typography } from "@mui/material";
import React from "react";
import CardSection from "../Components/LessonPlan/cards-section";
import { supabase } from "../utils/supabase-client";
import { LessonPlanProps } from "../types/lesson-plan";

export const revalidate = 0

const page = async () => {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("lesson-plan").select("*");;
      if (error) {
        console.log(error.message);
        return null;
      }
      return data;
    } catch (error) {
      console.error("An unexpected error occurred:", error);

      return null;
    }
  };

  const lessonPlan: LessonPlanProps[] | null = await fetchData();

  return (
    <Container>
      <Typography className="w-full text-center z-10 left-0 text-xl mt-3 mb-4 sm:text-2xl md:text-3xl text-black/25">
        {"Lesson Plans"}
      </Typography>
      {lessonPlan &&
        lessonPlan.map((item, i) => {
          return <CardSection data={item} key={i} />;
        })}
    </Container>
  );
};

export default page;
