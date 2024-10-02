import React from "react";
import MyanmarAlphabetWorkbook from "../Components/WorkBook/myanmar-alphabet-book";
import { supabase } from "../utils/supabase-client";

const page =  async () => {

    
  return (
    <main>
       <MyanmarAlphabetWorkbook /> 
    </main>
  );
};

export default page;
