import { Box } from "@mui/material";
import Cards from "./Components/Home/cards";
import TopWavyBg from "./Components/Home/top-wavy-bg";
import BottomWavyBg from "./Components/Home/bottom-wavy-bg";
import MainLogoIcon from "@/public/icons/Logo";
import MainIcon from "@/public/icons/Logo";

const Home = () => {
  return (
    <Box className="w-full mt-[10em] mx-auto">
      <TopWavyBg />
      <Cards />
      <BottomWavyBg/>
    </Box>
  );
};

export default Home;
