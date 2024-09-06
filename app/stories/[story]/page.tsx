import StorySection from "@/app/Components/Story/story-section";
import { Container, Typography } from "@mui/material";

interface FlashCardsPageParams {
  story: string; // Define the shape of your params object
}

const FlashCardsPage: React.FC<{ params: FlashCardsPageParams }> = ({ params }) => {

  return (
    <Container className="mt-[6em] md:mt-[10em]">
        <StorySection/>
    </Container>
  );
};

export default FlashCardsPage;