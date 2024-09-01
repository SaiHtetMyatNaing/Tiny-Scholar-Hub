import { Box, Input} from "@mui/material"
import Image from "next/image"

const WorksheetHeader = () => {
  return (
   <Box  className='flex items-center justify-between max-w-full mt-3'>
    <Box className='w-14 md:w-20'>
       <Image src='/Logo.png' width={200} height={200} alt='tiny-scholar-hub-logo'/>
    </Box>

    <Box className='flex flex-col gap-2 text-sm sm:flex-row md:text-xl'>
        <Input type="text" placeholder="အမည်"></Input>
        <Input  type="text" placeholder="နေ့စွဲ"></Input>
    </Box>

   </Box>
  )
}

export default WorksheetHeader