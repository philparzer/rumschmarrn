/*
WHAT:

*/

interface Props {
    text: string;
}

export default function RichtextBox({ text }:Props) {
    return (
        <div
          className="mt-20 richtext"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
    )
}