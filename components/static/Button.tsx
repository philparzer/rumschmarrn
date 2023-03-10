/*
WHAT:

*/

interface Props {
    handler: () => void;
    text: string;
}   

export default function Button({handler, text}:Props) {
    return (
            <button onClick={handler} className="px-4 py-1 bg-burnt dark:bg-white hover:bg-rum transition-all text-white dark:text-burnt rounded-full">{text}</button>
    )
}