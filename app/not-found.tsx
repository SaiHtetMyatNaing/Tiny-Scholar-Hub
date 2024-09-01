import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl flex items-center  justify-between flex-col gap-10">

      <Image width={550} height={400} alt='error 404' className="mt-20 object-cover"  src='/error404.png'/>
      <Link href="/">
        <Button
          variant="outlined"
          className="hover:bg-[#f5c13d] text-black border-1 border-[#f5c13d]"
        >
          Return Home
        </Button>
      </Link>
    </div>
  );
}
