/*
WHAT:
main h1 for subpages
*/

interface Props {
  title: string;
}

export default function MainHeadline({ title }: Props) {
  return <h1 className="text-[40px] font-poppins dark:text-white">{title}</h1>;
}
