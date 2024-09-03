'use client'
import StackSection from "@/app/Components/FlashCard/card-stack-section";
import WordSearchTemplate from "@/app/Components/WorkBook/WorkBookPageOne/word-search-section";
import { speakText } from "@/app/lib/myanmar-speect";
import { VolumeUp } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";

interface FlashCardsPageParams {
  letter: string; // Define the shape of your params object
}

const FlashCardsPage: React.FC<{ params: FlashCardsPageParams }> = ({ params }) => {

  const decodedLetter : string = decodeURIComponent(params.letter)
  const handleClick = ()=> {
     speakText(decodedLetter)
  }
  return (
    <Container className="mt-[10em]">
       <StackSection/>
    </Container>
  );
};

export default FlashCardsPage;