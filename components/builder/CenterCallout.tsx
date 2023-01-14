/*
WHAT:

*/

interface Props {
    callouts: any[];
    title: string;
}

export default function CenterCallout({ title, callouts }:Props) {
    return (
        <section className="flex flex-col items-center justify-center gap-6 text-center my-40">
            <h2 className="text-[40px] font-semibold font-poppins max-w-[70vw] lg:max-w-[50vw] leading-tight">{title}</h2>
            <ul className="flex flex-col gap-4 text-lg">
                {callouts.map((callout:any, i:number) => <li key={i}>{callout.content}</li>)}
            </ul>
        </section>
    )
}