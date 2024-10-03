import React from "react";
import MyanmarAlphabetWorkbook from "../Components/WorkBook/myanmar-alphabet-book";
import { supabase } from "../utils/supabase-client";
import { DataProps } from "../store/useFlashcardData";
import { Container } from "@mui/material";

const page =  async () => {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("id ,character_id, character , name_mm")
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
    <Container className="max-w-6xl">
      {FlashcardsData && <MyanmarAlphabetWorkbook data={FlashcardsData} />}
    </Container>
  );
};

export default page;
