import React from "react";
import AdminPanel from "../Components/AdminDashboard/admin-tab";
import { supabase } from "../utils/supabase-client";

export default async function Page() {
  const { data: LessonPlanData } = await supabase
    .from("lesson-plan")
    .select("*");
  const { data: FlashcardsData } = await supabase
    .from("flashcards")
    .select('character , character_id , id, name_en , name_mm , created_at, updated_at , image_url')
  const { data: StoryData } = await supabase.from("stories").select("*");
  
  return (
    <>
      {LessonPlanData && StoryData && FlashcardsData  && (
        <AdminPanel
          FlashCardsData={FlashcardsData}
          StoryData={StoryData}
          LessonPlanData={LessonPlanData}
        />
      )}
    </>
  );
}
