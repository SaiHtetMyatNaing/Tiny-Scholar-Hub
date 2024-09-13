import StorySection from "@/app/Components/Story/story-section";
import { supabase } from "@/app/utils/supabase-client";
import { Container, Typography } from "@mui/material";

interface FlashCardsPageParams {
  story: string; // Define the shape of your params object
}

const FlashCardsPage: React.FC<{ params: FlashCardsPageParams }> = async ({
  params,
}) => {
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .eq("story_id", Number(params.story));

  return (
    <Container className="mt-[6em] md:mt-[10em]">
      {data && <StorySection data={data} />}
    </Container>
  );
};

export default FlashCardsPage;
