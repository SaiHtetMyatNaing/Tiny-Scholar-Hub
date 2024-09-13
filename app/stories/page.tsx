import { Container } from "@mui/material";
import React from "react";
import StoryCards, { StoryCardProps } from "../Components/Story/story-cards";
import { supabase } from "../utils/supabase-client";
import { StorySegmentProps } from "../lib/type";

const page = async () => {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("stories")
        .select("story_id , image_url  , title");
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

  const data: StoryCardProps[] | null = await fetchData();

  return (
    <Container className="mt-[6em]">
      {data && <StoryCards data={data} />}
    </Container>
  );
};

export default page;
