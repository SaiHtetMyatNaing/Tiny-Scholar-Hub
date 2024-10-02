import React from "react";
import MyanmarAlphabetWorkbook from "../Components/WorkBook/myanmar-alphabet-book";
import { supabase } from "../utils/supabase-client";
import { DataProps } from "../store/useFlashcardData";

const page =  async () => {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("id ,character_id, character , image_url , name_mm")
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
    <main>
      {FlashcardsData && <MyanmarAlphabetWorkbook data={FlashcardsData} /> }
    </main>
  );
};

export default page;
