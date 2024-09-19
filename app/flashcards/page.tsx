import { Container } from "@mui/material";
import CardComponent, { CharProps } from "../Components/FlashCard/card-section";
import { supabase } from "../utils/supabase-client";

const Page = async () => {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("character_id , character");
      if (error) {
        return null;
      }
      return data;
    } catch (error) {
      return null;
    }
  };

  const FlashcardsData : CharProps[] | null = await fetchData();
  
  return (
    <Container>
      {FlashcardsData && <CardComponent data={FlashcardsData} />}
    </Container>
  );
};

export default Page;
