/*
WHAT:
popup to get user schmarrntype -> this sets cookie and is used on episode page to set default annotator
*/

import { SchmarrnTestQuestion } from "../../shared-ts/interfaces";
import { SchmarrnType } from "../../shared-ts/enums";
import { useState, useRef } from "react";
import SchmarrnReveal from "./SchmarrnReveal";
import { supabase } from '../../lib/initSupabase'

interface Props {
  questions: [SchmarrnTestQuestion];
  cookie: any;
  setVisible: (toggle: boolean) => void;
}

let answers = {
  // negative values = left-leaning | positive values = right-leaning
  social: 0,
  economic: 0,
};

export default function Schmarrntest({ questions, cookie, setVisible }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [schmarrntyp, setSchmarrnTyp] = useState<any>();
  
  const addSchmarrn = async (schmarrntyp:string) => {
      let { data: schmarrn, error } = await supabase
        .from('schmarrntest')
        .insert({ schmarrntyp })
        .single()
      if (error) console.log(error)
      else {console.log("success"); console.log(schmarrn)}
  }

  const yesNoClick = (answer: boolean) => {
    let questionType = questions[currentQuestion].type;
    let value = questions[currentQuestion].value;
    

    if (answer === true) {
      answers[questionType] += value;
    } else {
      answers[questionType] -= value;
    }


    if (currentQuestion === questions.length - 1) {

      let typ;

      // if any of the values = 0 -> randomize value
      if (answers.social === 0) {
        answers.social = Math.random() > 0.5 ? 1 : -1;
      }
      if (answers.economic === 0) {
        answers.economic = Math.random() > 0.5 ? 1 : -1;
      }

      //proceed to schmarrntyp eval
      if (answers.social > 0 && answers.economic > 0) {
        typ = "Sahne";
        setSchmarrnTyp(SchmarrnType.Sahne);
      } //Soc-Right + Econ-Right

      else if (answers.social < 0 && answers.economic < 0) {
        typ = "Nuss";
        setSchmarrnTyp(SchmarrnType.Nuss);
      } //Soc-Left + Econ-Left

      else if (answers.social > 0 && answers.economic < 0) {
        typ = "Apfel";
        setSchmarrnTyp(SchmarrnType.Apfel);
      } //Soc-Right + Econ-Left
      
      else if (answers.social < 0 && answers.economic > 0) {
        typ = "Blaubeer";
        setSchmarrnTyp(SchmarrnType.Blaubeer);
      } //Soc-Left + Econ-Right
      
      console.log(answers)
      cookie.set("schmarrntyp", typ);
      if (typ !== undefined) { addSchmarrn(typ);}
    }

    setCurrentQuestion(currentQuestion + 1);
  
    
  };


  return (
    <div className="w-full h-full fixed top-0 bg-burnt bg-opacity-80 z-50 flex items-center justify-center dark:text-burnt">
        <div className="flex justify-center items-center gap-5 flex-wrap">
        {questions.length === currentQuestion ? (
          <SchmarrnReveal schmarrntyp={schmarrntyp} setVisible={setVisible} currentQuestion={currentQuestion} length={questions.length}/>
        ) : (
      <div className="bg-white px-8 pt-7 rounded-[10px] w-11/12 lg:w-[33vw] flex flex-col justify-between">
            <div className="flex justify-center">
              <div className="w-[90%] h-2 rounded-full bg-glass relative">
                <div
                  style={{
                    width: `${(currentQuestion / questions.length) * 100}%`,
                  }}
                  className="h-2 rounded-full bg-schmarrn-dark absolute"
                ></div>
              </div>
            </div>
            <div className="">
              <p className="mt-10 ml-6 mb-4">Stimmst du zu?</p>
              <div className="flex gap-2 font-poppins text-xl lg:text-2xl">
                <div>
                  <p className="w-4">{currentQuestion + 1}.</p>
                </div>
                <div>
                  <h2 className="h-[120px]">
                    {questions[currentQuestion].question}
                  </h2>
                  <div className="mt-8 flex gap-10 lg:gap-20">
                    <button
                      onClick={() => yesNoClick(true)}
                      className="flex gap-4 items-center"
                    >
                      <div className="relative flex justify-center">
                        <span className="relative z-10">Ja</span>
                        <div className="w-[120%] h-2 bg-schmarrn-dark bottom-1 absolute"></div>
                      </div>
                      <svg
                        width="37"
                        height="40"
                        viewBox="0 0 37 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.58819 17.0772C1.15877 11.7426 4.3246 6.2592 9.65926 4.82978L18.0246 2.5883C23.3592 1.15889 28.8426 4.32471 30.272 9.65937L33.8073 22.8532C35.2367 28.1879 32.0709 33.6713 26.7362 35.1007L18.3709 37.3422C13.0363 38.7716 7.55289 35.6058 6.12348 30.2711L2.58819 17.0772Z"
                          fill="#F4E4A8"
                        />
                        <path
                          d="M7.48565 17.442C6.05623 12.1073 9.22206 6.62394 14.5567 5.19452L19.2445 3.93844C24.5791 2.50902 30.0625 5.67485 31.4919 11.0095L33.8699 19.8844C35.2994 25.2191 32.1335 30.7024 26.7989 32.1319L22.1111 33.3879C16.7765 34.8174 11.2931 31.6515 9.86367 26.3169L7.48565 17.442Z"
                          fill="#FFEFB5"
                        />
                        <path
                          d="M29 13.5C29 15.433 27.433 17 25.5 17C23.567 17 22 15.433 22 13.5C22 11.567 23.567 10 25.5 10C27.433 10 29 11.567 29 13.5Z"
                          fill="#312F2A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.5 15C26.3284 15 27 14.3284 27 13.5C27 12.6716 26.3284 12 25.5 12C24.6716 12 24 12.6716 24 13.5C24 14.3284 24.6716 15 25.5 15ZM25.5 17C27.433 17 29 15.433 29 13.5C29 11.567 27.433 10 25.5 10C23.567 10 22 11.567 22 13.5C22 15.433 23.567 17 25.5 17Z"
                          fill="#312F2A"
                        />
                        <path
                          d="M21 15.5C21 17.433 19.433 19 17.5 19C15.567 19 14 17.433 14 15.5C14 13.567 15.567 12 17.5 12C19.433 12 21 13.567 21 15.5Z"
                          fill="#312F2A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.5 17C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5C16 16.3284 16.6716 17 17.5 17ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C15.567 12 14 13.567 14 15.5C14 17.433 15.567 19 17.5 19Z"
                          fill="#312F2A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.6003 19.2001C29.0421 19.5314 29.1316 20.1582 28.8003 20.6001C27.8419 21.8779 26.0661 22.7043 24.2797 23.1012C22.4633 23.5049 20.3973 23.5198 18.684 22.9487C18.1601 22.7741 17.8769 22.2078 18.0516 21.6838C18.2262 21.1599 18.7926 20.8767 19.3165 21.0514C20.6032 21.4803 22.2873 21.4952 23.8458 21.1489C25.4344 20.7959 26.6586 20.1222 27.2003 19.4001C27.5316 18.9582 28.1584 18.8687 28.6003 19.2001Z"
                          fill="#312F2A"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => yesNoClick(false)}
                      className="flex gap-4 items-center"
                    >
                      <div className="relative flex justify-center">
                        <span className="relative z-10">Nein</span>
                        <div className="w-[120%] h-2 bg-rum bottom-1 absolute"></div>
                      </div>
                      <svg
                        width="37"
                        height="40"
                        viewBox="0 0 37 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.58819 17.0772C1.15877 11.7426 4.3246 6.2592 9.65926 4.82978L18.0246 2.5883C23.3592 1.15889 28.8426 4.32471 30.272 9.65937L33.8073 22.8532C35.2367 28.1879 32.0709 33.6713 26.7362 35.1007L18.3709 37.3422C13.0363 38.7716 7.55289 35.6058 6.12348 30.2711L2.58819 17.0772Z"
                          fill="#F4E4A8"
                        />
                        <path
                          d="M7.48565 17.442C6.05623 12.1073 9.22206 6.62394 14.5567 5.19452L19.2445 3.93844C24.5791 2.50902 30.0625 5.67485 31.4919 11.0095L33.8699 19.8844C35.2994 25.2191 32.1335 30.7024 26.7989 32.1319L22.1111 33.3879C16.7765 34.8174 11.2931 31.6515 9.86367 26.3169L7.48565 17.442Z"
                          fill="#FFEFB5"
                        />
                        <path
                          d="M29 13.5C29 15.433 27.433 17 25.5 17C23.567 17 22 15.433 22 13.5C22 11.567 23.567 10 25.5 10C27.433 10 29 11.567 29 13.5Z"
                          fill="#312F2A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.5 15C26.3284 15 27 14.3284 27 13.5C27 12.6716 26.3284 12 25.5 12C24.6716 12 24 12.6716 24 13.5C24 14.3284 24.6716 15 25.5 15ZM25.5 17C27.433 17 29 15.433 29 13.5C29 11.567 27.433 10 25.5 10C23.567 10 22 11.567 22 13.5C22 15.433 23.567 17 25.5 17Z"
                          fill="#312F2A"
                        />
                        <path
                          d="M21 15.5C21 17.433 19.433 19 17.5 19C15.567 19 14 17.433 14 15.5C14 13.567 15.567 12 17.5 12C19.433 12 21 13.567 21 15.5Z"
                          fill="#312F2A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.5 17C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5C16 16.3284 16.6716 17 17.5 17ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C15.567 12 14 13.567 14 15.5C14 17.433 15.567 19 17.5 19Z"
                          fill="#312F2A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.4 23.1925C17.9581 22.8611 17.8686 22.2343 18.2 21.7925C19.1583 20.5147 20.9341 19.6883 22.7205 19.2913C24.537 18.8877 26.6029 18.8727 28.3162 19.4438C28.8401 19.6185 29.1233 20.1848 28.9487 20.7087C28.774 21.2327 28.2077 21.5159 27.6837 21.3412C26.397 20.9123 24.713 20.8974 23.1544 21.2437C21.5658 21.5967 20.3416 22.2703 19.8 22.9925C19.4686 23.4343 18.8418 23.5239 18.4 23.1925Z"
                          fill="#312F2A"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-end mt-10 mb-4">
              <button className="underline text-xs"> {/*TODO: */}
                Schmarrntest schon gemacht?
              </button>
            </div>
      </div>
      )}
      {questions.length !== currentQuestion && (
      <div className="bg-white px-8 py-8 lg:py-12 rounded-[10px] w-10/12 lg:w-auto lg:max-w-[20vw]">
        <h3 className="hidden lg:block text-xl font-poppins mb-8">{"Jetzt sag mal ehrlich"}</h3>
        <p className="mb-4">{questions.length} Fragen. Ja oder nein.</p>
        <p>Was kommt raus?</p>
        <p className="font-poppins">Dein Schmarrntyp</p> 
      </div>)}
    </div>
    </div>
  );
}
