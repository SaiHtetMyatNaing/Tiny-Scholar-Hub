import StackSection from "@/app/Components/FlashCard/card-stack-section";
import StorySection from "@/app/Components/StorySection/story-section";
import { Container} from "@mui/material";

interface FlashCardsPageParams {
  letter: string; // Define the shape of your params object
}

const FlashCardsPage: React.FC<{ params: FlashCardsPageParams }> = ({ params }) => {

  return (
    <Container className="mt-[10em]">
       <StorySection/>
    </Container>
  );
};

export default FlashCardsPage;