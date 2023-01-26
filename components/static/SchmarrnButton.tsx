/*
WHAT:

*/

import { SchmarrnType } from "../../shared-ts/enums";
import Sahne from "../svgs/Sahne";
import Apfel from "../svgs/Apfel";
import Nuss from "../svgs/Nuss";
import Blaubeer from "../svgs/Blaubeer";

interface Props {
    handler: (type: SchmarrnType) => void;
    type: SchmarrnType;
    isPersonalSchmarrnType: boolean
}   

export default function SchmarrnButton({handler, type, isPersonalSchmarrnType}:Props) {


    return (
            <button className="w-12 h-12" onClick={() => handler(type)}> {/*TODO: export buttons correctly */}
                {type === SchmarrnType.Blaubeer &&
                    <div className={`${isPersonalSchmarrnType && "animate-bounce"}`}>
                    <Blaubeer />
                    </div>
                }
                {type === SchmarrnType.Apfel &&
                    <div className={`${isPersonalSchmarrnType && "animate-bounce"}`}>
                    <Apfel />
                    </div>
                    
                }
                {type === SchmarrnType.Nuss &&
                    <div className={`${isPersonalSchmarrnType && "animate-bounce"}`}>
                    <Nuss />
                    </div>
                    
                }
                {type === SchmarrnType.Sahne &&
                    <div className={`${isPersonalSchmarrnType && "animate-bounce"}`}>
                    <Sahne />
                    </div>
                }
            </button>
    )
}