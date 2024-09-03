'use client'
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div 
     initial={{ opacity : 0 , scale : 0.6  }}
     animate={{ opacity : 1, scale : 1}}
     transition={ {duration : 0.7}}
    className="mx-auto max-w-2xl flex items-center  mt-20 justify-between flex-col gap-10">
      <Image
        width={550}
        height={400}
        alt="error 404"
        className="mt-20 object-cover"
        src="/error404.png"
      />
      <Button
        variant="outlined"
        sx={{  ":hover" : { borderColor : "#f5c13d" , text : 'white'}  , color : '#f5c13d' , borderColor : "#f5c13d" , border : 1} }
      >
        <Link href="/">Return Home</Link>
      </Button>
    </motion.div>
  );
}
