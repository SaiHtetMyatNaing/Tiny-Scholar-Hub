import LessonPlanSection from "@/app/Components/LessonPlan/lesson-plan-page";
import { Container, Typography } from "@mui/material";

interface FlashCardsPageParams {
  slug: string; // Define the shape of your params object
}

const FlashCardsPage: React.FC<{ params: FlashCardsPageParams }> = ({ params }) => {

  return (
    <Container className="max-w-5xl w-full">
       <LessonPlanSection/>
    </Container>
  );
};

export default FlashCardsPage;