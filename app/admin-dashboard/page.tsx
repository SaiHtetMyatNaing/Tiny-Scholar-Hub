import React from "react";
import AdminPanel from "../Components/AdminDashboard/admin-tab";
import { supabase } from "../utils/supabase-client";
import { Container } from "@mui/material";

const page = async () => {
  const { data: LessonPlanData } = await supabase
    .from("lesson-plan ")
    .select("*");
  const { data: StoryData } = await supabase.from("stories").select("*");

  return (
    <>
      {LessonPlanData && StoryData && (
        <AdminPanel StoryData={StoryData} LessonPlanData={LessonPlanData} />
      )}
    </>
  );
};

export default page;
