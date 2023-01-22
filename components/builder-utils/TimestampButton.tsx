/*
WHAT:

*/

interface Props {
    isToggled: boolean;
    updateTimestamp: (i: number)=>void;
    barHeight: any;
    i: number;
}

export default function TimestampButton({ isToggled, updateTimestamp, barHeight, i }:Props) {
    
    return (
        <div className="relative" onClick={() => updateTimestamp(i)}>
            <button
              className={`${
                isToggled === true
                  ? "bg-schmarrn-dark"
                  : "bg-burnt dark:bg-night dark:hover:bg-schmarrn-dark hover:bg-schmarrn-dark"
              }  transition-colors h-[${
                barHeight
              }] w-full absolute bottom-0 rounded-[5px]`}
            ></button>
          </div>
    )
}

