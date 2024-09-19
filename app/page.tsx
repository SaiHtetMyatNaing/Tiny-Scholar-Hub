import { Box } from "@mui/material";
import Cards from "./Components/Home/cards";
import TopWavyBg from "./Components/Home/top-wavy-bg";
import BottomWavyBg from "./Components/Home/bottom-wavy-bg";
import { supabase } from "./utils/supabase-client";

const Home = async () => {

  
  return (
    <Box className="w-full mt-[10em] mx-auto">
      <TopWavyBg />
      <Cards />
      <BottomWavyBg />
    </Box>
  );
};

export default Home;
