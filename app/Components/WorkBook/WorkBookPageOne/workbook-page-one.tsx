import {Box} from '@mui/material';
import WorksheetHeader from '../workbook-header';
import WordSearchTemplate from './word-search-section';
import PictionarySection from './pictionary-section';
import WorkSheetFooter from '../workbook-footer';
import ListeningSection from './listening-section';


const WBPageOne = () => {
   
  return (
     <Box className='border-gray-400 flex flex-col gap-4 justify-center mx-auto max-w-3xl border-[2px] mt-7 p-1 px-3'>

      <WorksheetHeader/>

      <Box className='flex flex-wrap gap-4 sm:flex-nowrap'>
         <WordSearchTemplate word='က'/> 
         <PictionarySection/>
      </Box>

      <ListeningSection />
       <WorkSheetFooter/>
     </Box>
  );
};

export default WBPageOne;

