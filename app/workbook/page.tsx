import React from "react";
import MyanmarAlphabetWorkbook from "../Components/WorkBook/myanmar-alphabet-book";
import { supabase } from "../utils/supabase-client";

const page =  async () => {
  const { data: FlashcardsData } = await supabase
    .from("flashcards")
    .select('character , character_id , id, name_en , name_mm , created_at, updated_at , image_url')
  
  return (
    <main>
     { FlashcardsData &&  <MyanmarAlphabetWorkbook /> }
    </main>
  );
};

export default page;
