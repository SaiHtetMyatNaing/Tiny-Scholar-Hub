import { Box } from "@mui/material";
import Cards from "./Components/Home/cards";
import TopWavyBg from "./Components/Home/top-wavy-bg";
import BottomWavyBg from "./Components/Home/bottom-wavy-bg";

const Home = () => {
  return (
    <Box className="w-full mx-auto">
      <TopWavyBg />
      <Cards />
      <BottomWavyBg/>
    </Box>
  );
};

export default Home;
