// Question 4:

// Which CSS type are you familiar with? Styled Components,
// Tailwind Class Style, Inline CSS?

// I want you to create the following:

// Create a component called Polymorphism.

// On large desktop view, this component is a circle that
// flashes red and blue every 5 seconds.

// On laptop size view, this component is a rectangle that
// flashes orange and yellow every 5 seconds.

// On tablet size view, it becomes a triangle that
// flashes pink and green every 5 seconds.

// On mobile size view, it becomes a square that
// flashes purple and black every 5 seconds.
import React, {useEffect, useState} from "react";

export default function Polymorphism ()  {
    
    const [animationActive, setAnimationActive] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationActive(true);

            // Reset animation after 5 seconds to be ready to trigger again
            setTimeout(() => {
                setAnimationActive(false);
            }, 5000);
        }, 10000); // Start animation every 10 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const flashStyle = animationActive ? { animation: 'flash 0.3s infinite' } : {};



    return (
        <div className="p-10">
            <h2 className="font-black my-10">Question 4</h2>
            <p className=" p-4">
                Which CSS type are you familiar with? Styled Components,<br/>
                Tailwind Class Style, Inline CSS?<br/>

                I want you to create the following:<br/>

                Create a component called Polymorphism.<br/>

                On large desktop view, this component is a circle that<br/>
                flashes red and blue every 5 seconds.<br/>

                On laptop size view, this component is a rectangle that<br/>
                flashes orange and yellow every 5 seconds.<br/>

                On tablet size view, it becomes a triangle that <br/>
                flashes pink and green every 5 seconds.<br/>

                On mobile size view, it becomes a square that<br/>
                flashes purple and black every 5 seconds.<br/>
            </p>
            <h3 className="my-6 font-bold">Solution</h3>
            <div className="mt-10 grid place-items-center">
                <h3 className="bold ">Change the screen size to see different shapes</h3>
                <style>
                    {`
                        @keyframes flash {
                            0%, 50% { background-color: var(--colpri); }
                            100% { background-color: var(--colsec); }
                        }

                        @media screen and (min-width:1030px) {
                            #circle {
                                display: block !important;
                            }
                        }
                        @media screen and (max-width: 1024px) and (min-width:770px) {
                            #rectangle {
                                display: block !important;
                            }
                        }
                        @media screen and (max-width: 768px) and (min-width:430px) {
                            #triangle {
                                display: block !important;
                            }
                        }
                        @media screen and (max-width: 425px) and (min-width:300px) {
                            #square {
                                display: block !important;
                            }
                        }
                    `}
                </style>
                <div id="circle" className="hidden my-6 w-40 h-40 rounded-full border-4 border-sky-700"
                    style={{...flashStyle, '--colpri': "blue", '--colsec':"red"}}>
                </div>
                <div id="rectangle" className="hidden w-60 h-32 my-6 border-4 border-sky-700"
                    style={{...flashStyle, '--colpri': "orange", '--colsec':"yellow"}}>
                </div>
                <div id="triangle" className="hidden w-0 h-0 my-6 border-r-[100px] text=white border-l-[100px] border-b-[200px] border-b-transparent bg-gray-200 border-r-white border-l-white"
                    style={{...flashStyle, '--colpri': "pink", '--colsec':"green"}}>
                </div>
                <div id="square" className="hidden w-40 h-40 my-6 border-4 border-sky-700"
                    style={{...flashStyle, '--colpri': "purple", '--colsec':"black"}}
                    >
                </div>
            </div>
        </div>
    )
}