import { Box, Link } from '@mui/material'
import React from 'react'

const WorkSheetFooter = () => {
  return (
    <Box className="flex items-center justify-between max-w-full mt-8 mb-2">
        <em className='text-[9px] md:text-[0.8em] text-gray-500 mt-1'>{"Teach From Your Heart , Not From The Book"}</em>
        <Link href='https://www.tinyscholarhub.com'>
           <em className='text-[10px] md:text-[0.8em]'>www.tinyscholarhub.com</em>
        </Link>
    </Box>
  )
}

export default WorkSheetFooter