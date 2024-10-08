import React from "react";
import MyanmarAlphabetWorkbook from "../Components/WorkBook/myanmar-alphabet-book";
import { supabase } from "../utils/supabase-client";
import { DataProps } from "../store/useFlashcardData";
import { Container } from "@mui/material";
import CardComponent from "../Components/FlashCard/card-section";

const page =  async () => {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("id ,character_id,image_url , character , name_mm")
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
      {FlashcardsData && <CardComponent data={FlashcardsData} path="workbook" title="Worksheets"/>}
    </Container>
  );
};

export default page;
