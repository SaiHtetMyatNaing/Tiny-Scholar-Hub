import { Container } from "@mui/material";
import CardComponent from "../Components/FlashCard/card-section";
import { supabase } from "../utils/supabase-client";
import { DataProps } from "../store/useFlashcardData";


const Page = async () => {
  // const fetchData = async () => {
  //   try {
  //     const { data, error } = await supabase
  //       .from("flashcards")
  //       .select("id ,character_id, character , image_url , name_mm")
  //       .order('character_id', { ascending: true });
  //     if (error) {
  //       return null;
  //     }
  //     return data;
  //   } catch (error) {
  //     return null;
  //   }
  // };

  // const FlashcardsData : DataProps[] | null = await fetchData();

  return (
    <Container>
      <CardComponent data={[]} />
    </Container>
  );
};

export default Page;
