/*
WHAT:

*/

import Link from "next/link"

interface Props {
  link: string;
  text: string;
}   

export default function ButtonLink({link, text}:Props) {
  return (
          <Link href={link} className="px-4 py-1 bg-burnt dark:bg-white hover:bg-rum dark:hover:bg-rum transition-all text-white dark:text-burnt rounded-full">{text}</Link>
  )
}