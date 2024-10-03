import { Container } from "@mui/material";
import CardComponent from "../Components/FlashCard/card-section";
import { supabase } from "../utils/supabase-client";
import { DataProps } from "../store/useFlashcardData";


const Page = async () => {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("id ,character_id, character ,name_mm , image_url")
        .order('character_id', { ascending: true });
      if (error) {
        return null;
      } 
      return data;
    } catch (error) {
      return null;
    }
  };

  const FlashcardsData : DataProps[] | null = await fetchData();

  return (
    <Container>
      {FlashcardsData && <CardComponent data={FlashcardsData} path="flashcards" title="Alphabet Learning Cards"/>}
    </Container>
  );
};

export default Page;
