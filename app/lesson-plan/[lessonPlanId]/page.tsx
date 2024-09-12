import LessonPlanSection from "@/app/Components/LessonPlan/lesson-plan-page";
import { LessonPlanProps } from "@/app/types/lesson-plan";
import { supabase } from "@/app/utils/supabase-client";
import { Container } from "@mui/material";
import { notFound } from "next/navigation";

interface LessonPlanPageParams {
  lessonPlanId: string;
}

const Page: React.FC<{ params: LessonPlanPageParams }> = async ({ params }) => {
  const { data, error } = await supabase
    .from("lesson-plan")
    .select("*")
    .eq("id", Number(params.lessonPlanId))
    .single();

  if (error) {
    return null;
  }

  return (
    <Container className="max-w-5xl w-full">
      {data && <LessonPlanSection data={data} />}
    </Container>
  );
};

export default Page;
