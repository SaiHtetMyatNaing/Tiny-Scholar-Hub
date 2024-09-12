import StackSection from "@/app/Components/FlashCard/card-stack-section";
import { Container, Typography } from "@mui/material";

interface FlashCardsPageParams {
  slug: string; // Define the shape of your params object
}

const FlashCardsPage: React.FC<{ params: FlashCardsPageParams }> = ({
  params,
}) => {
  return (
    <Container className="mt-[10em] max-w-2xl flex items-center justify-center">
      <StackSection />
    </Container>
  );
};

export default FlashCardsPage;
