import React from "react";
import AdminPanel from "../Components/AdminDashboard/admin-tab";
import { supabase } from "../utils/supabase-client";
import { Container } from "@mui/material";

const page = async () => {
  const { data: LessonPlanData } = await supabase
    .from("lesson-plan")
    .select("*");
  const { data: StoryData } = await supabase.from("stories").select("*");
  const { data: FlashCardsData } = await supabase
    .from("flashcards")
    .select("*");

  return (
    <>
      {LessonPlanData && StoryData && FlashCardsData && (
        <AdminPanel
          FlashCardsData={FlashCardsData}
          StoryData={StoryData}
          LessonPlanData={LessonPlanData}
        />
      )}
    </>
  );
};

export default page;
