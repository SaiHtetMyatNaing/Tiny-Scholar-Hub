import MyanmarAlphabetWorkbook from "@/app/Components/WorkBook/myanmar-alphabet-book";
import { supabase } from "@/app/utils/supabase-client";
import { Container } from "@mui/material";

interface FlashCardsPageParams {
  slug: string;
}

export const revalidate = 0; 

const FlashCardsPage: React.FC<{ params: FlashCardsPageParams }> = async ({
  params,
}) => {

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("id ,character_id, character , image_url ,name_mm")
        .eq("character_id",  parseInt(params.slug, 10));
      if (error) {
        return null;
      }
      return data;
    } catch (error) {
      return null;
    }
  };

  const worksheetData = await fetchData();
  worksheetData && console.log(worksheetData);
  
  return (
    <Container className="max-w-5xl flex items-center justify-center">
      {worksheetData && <MyanmarAlphabetWorkbook data={worksheetData} />}
    </Container>
  );
};

export default FlashCardsPage;
