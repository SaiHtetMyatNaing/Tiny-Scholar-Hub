import StackSection, {
  FlashCardProps,
} from "@/app/Components/FlashCard/card-stack-section";
import { supabase } from "@/app/utils/supabase-client";
import { Container } from "@mui/material";

interface FlashCardsPageParams {
  slug: number;
}

const FlashCardsPage: React.FC<{ params: FlashCardsPageParams }> = async ({
  params,
}) => {
  const { data, error } = await supabase
    .from("flashcards")
    .select("name_mm , image_url, character")
    .eq("character_id", params.slug);
      
  return (
    <Container className="mt-[10em] max-w-2xl flex items-center justify-center">
      {data && data.length > 0 && <StackSection data={data} />}
    </Container>
  );
};

export default FlashCardsPage;
