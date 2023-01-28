/*
WHAT:

*/

interface Props {
    text: string;
}

export default function RichtextBox({ text }:Props) {
    return (
        <div
          className="my-4 richtext"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
    )
}