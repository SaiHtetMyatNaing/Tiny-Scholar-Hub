import StackSection, { FlashCardProps } from "@/app/Components/FlashCard/card-stack-section";
import { supabase } from "@/app/utils/supabase-client";
import { Container, Typography } from "@mui/material";

interface FlashCardsPageParams {
  slug: string; 
}

const FlashCardsPage: React.FC<{ params: FlashCardsPageParams }> =  async({ params}) => {
  
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("name_mm , image_url , character")
        .eq('character' , decodeURIComponent(params.slug));
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

  const FlashcardData : FlashCardProps[] | null= await fetchData();
  return (
    <Container className="mt-[10em] max-w-2xl flex items-center justify-center">
     {FlashcardData &&  <StackSection data={FlashcardData}/>}
    </Container>
  );
};

export default FlashCardsPage;
