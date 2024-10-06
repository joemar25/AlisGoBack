"use client";
import React from "react";
import { useReducer } from "react";

interface Props {
  property1: "default" | "variant-5" | "variant-2" | "variant-3" | "variant-4";
  className: any;
}

export const PropertyDefaultWrapper = ({ property1, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`w-[1240px] h-[350px] relative ${className}`}>
      <div
        className={`absolute ${state.property1 === "variant-2" ? "w-[314px]" : "w-[299px]"} ${state.property1 === "variant-2" ? "-left-2" : "left-0"
          } ${state.property1 === "variant-2" ? "top-[-9px]" : "top-0"} ${state.property1 === "variant-2" ? "h-[368px]" : "h-[350px]"
          }`}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
      >
        <div
          className={`shadow-drop-shadow-1 rounded-[25px] bg-white relative ${state.property1 === "variant-2" ? "w-[310px]" : "w-[295px]"
            } ${state.property1 === "variant-2" ? "h-[368px]" : "h-[350px]"}`}
        >
          <div
            className={`font-heading-7 tracking-[var(--heading-7-letter-spacing)] [font-style:var(--heading-7-font-style)] text-[length:var(--heading-7-font-size)] opacity-75 text-gray absolute font-[number:var(--heading-7-font-weight)] whitespace-nowrap leading-[var(--heading-7-line-height)] ${state.property1 === "variant-2" ? "w-[105px]" : ""
              } ${state.property1 === "variant-2" ? "left-[17px]" : "left-4"} ${state.property1 === "variant-2" ? "top-[324px]" : "top-[308px]"
              }`}
          >
            90 Collections
          </div>
          <div
            className={`font-heading-4 tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)] text-[length:var(--heading-4-font-size)] text-black absolute font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] ${state.property1 === "variant-2" ? "w-[164px]" : ""
              } ${state.property1 === "variant-2" ? "left-[17px]" : "left-4"} ${state.property1 === "variant-2" ? "top-[289px]" : "top-[275px]"
              }`}
          >
            Palaui Island
          </div>
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-2" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-2" ? "left-[17px]" : "left-4"
              } ${state.property1 === "variant-2" ? "top-[17px]" : "top-4"} ${state.property1 === "variant-2"
                ? "bg-[url(/static/img/download-7-1.png)]"
                : "bg-[url(/static/img/download-7-4.png)]"
              } ${state.property1 === "variant-2" ? "h-[247px]" : "h-[235px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-2" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-2" ? "left-40" : "left-[152px]"
              } ${state.property1 === "variant-2" ? "top-[17px]" : "top-4"} ${state.property1 === "variant-2"
                ? "bg-[url(/static/img/download-8-1.png)]"
                : "bg-[url(/static/img/download-8-4.png)]"
              } ${state.property1 === "variant-2" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-2" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-2" ? "left-40" : "left-[152px]"
              } ${state.property1 === "variant-2" ? "top-[145px]" : "top-[138px]"} ${state.property1 === "variant-2"
                ? "bg-[url(/static/img/download-9-1.png)]"
                : "bg-[url(/static/img/download-9-4.png)]"
              } ${state.property1 === "variant-2" ? "h-[119px]" : "h-[113px]"}`}
          />
        </div>
      </div>
      <div
        className={`absolute ${state.property1 === "variant-3" ? "w-[314px]" : "w-[299px]"} ${state.property1 === "variant-3" ? "left-[307px]" : "left-[315px]"
          } ${state.property1 === "variant-3" ? "top-[-9px]" : "top-0"} ${state.property1 === "variant-3" ? "h-[368px]" : "h-[350px]"
          }`}
      >
        <div
          className={`shadow-drop-shadow-1 rounded-[25px] bg-white relative ${state.property1 === "variant-3" ? "w-[310px]" : "w-[295px]"
            } ${state.property1 === "variant-3" ? "h-[368px]" : "h-[350px]"}`}
        >
          <div
            className={`font-heading-7 [font-style:var(--heading-7-font-style)] tracking-[var(--heading-7-letter-spacing)] text-[length:var(--heading-7-font-size)] opacity-75 text-gray absolute font-[number:var(--heading-7-font-weight)] whitespace-nowrap leading-[var(--heading-7-line-height)] ${state.property1 === "variant-3" ? "w-[105px]" : ""
              } ${state.property1 === "variant-3" ? "left-[17px]" : "left-4"} ${state.property1 === "variant-3" ? "top-[324px]" : "top-[308px]"
              }`}
          >
            60 Collections
          </div>
          <div
            className={`[font-family:'Syne',Helvetica] tracking-[0] text-2xl text-black absolute font-semibold leading-[normal] ${state.property1 === "variant-3" ? "w-[259px]" : ""
              } ${state.property1 === "variant-3" ? "left-[17px]" : "left-4"} ${state.property1 === "variant-3" ? "top-[289px]" : "top-[275px]"
              }`}
          >
            Batad Rice Terraces
          </div>
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-3" ? "w-[138px]" : "w-[131px]"} ${state.property1 === "variant-3" ? "left-[17px]" : "left-4"
              } ${state.property1 === "variant-3" ? "top-[17px]" : "top-4"} ${state.property1 === "variant-3"
                ? "bg-[url(/static/img/2023-03-05-1-2.png)]"
                : "bg-[url(/static/img/2023-03-05-1-4.png)]"
              } ${state.property1 === "variant-3" ? "h-[247px]" : "h-[235px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-3" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-3" ? "left-40" : "left-[152px]"
              } ${state.property1 === "variant-3" ? "top-[17px]" : "top-4"} ${state.property1 === "variant-3"
                ? "bg-[url(/static/img/2024-03-30-1-2.png)]"
                : "bg-[url(/static/img/2024-03-30-1-4.png)]"
              } ${state.property1 === "variant-3" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-3" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-3" ? "left-40" : "left-[152px]"
              } ${state.property1 === "variant-3" ? "top-[145px]" : "top-[138px]"} ${state.property1 === "variant-3"
                ? "bg-[url(/static/img/img-20170610-123617-443-1-2.png)]"
                : "bg-[url(/static/img/img-20170610-123617-443-1-4.png)]"
              } ${state.property1 === "variant-3" ? "h-[119px]" : "h-[113px]"}`}
          />
        </div>
      </div>
      <div
        className={`absolute ${state.property1 === "variant-4" ? "w-[314px]" : "w-[299px]"} ${state.property1 === "variant-4" ? "left-[622px]" : "left-[630px]"
          } ${state.property1 === "variant-4" ? "top-[-9px]" : "top-0"} ${state.property1 === "variant-4" ? "h-[368px]" : "h-[350px]"
          }`}
        onMouseEnter={() => {
          dispatch("mouse_enter_575");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave_575");
        }}
      >
        <div
          className={`shadow-drop-shadow-1 rounded-[25px] bg-white relative ${state.property1 === "variant-4" ? "w-[310px]" : "w-[295px]"
            } ${state.property1 === "variant-4" ? "h-[368px]" : "h-[350px]"}`}
        >
          <div
            className={`font-heading-7 [font-style:var(--heading-7-font-style)] tracking-[var(--heading-7-letter-spacing)] text-[length:var(--heading-7-font-size)] opacity-75 text-gray absolute font-[number:var(--heading-7-font-weight)] whitespace-nowrap leading-[var(--heading-7-line-height)] ${state.property1 === "variant-4" ? "w-[111px]" : ""
              } ${state.property1 === "variant-4" ? "left-[17px]" : "left-4"} ${state.property1 === "variant-4" ? "top-[324px]" : "top-[308px]"
              }`}
          >
            140 Collections
          </div>
          <div
            className={`font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] text-[length:var(--heading-4-font-size)] text-black absolute font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] ${state.property1 === "variant-4" ? "w-[188px]" : ""
              } ${state.property1 === "variant-4" ? "left-[17px]" : "left-4"} ${state.property1 === "variant-4" ? "top-[289px]" : "top-[275px]"
              }`}
          >
            Sumilon Island
          </div>
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-4" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-4" ? "left-40" : "left-[152px]"
              } ${state.property1 === "variant-4" ? "top-[145px]" : "top-[138px]"} ${state.property1 === "variant-4"
                ? "bg-[url(/static/img/download-15-3.png)]"
                : "bg-[url(/static/img/download-15-4.png)]"
              } ${state.property1 === "variant-4" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-4" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-4" ? "left-40" : "left-[152px]"
              } ${state.property1 === "variant-4" ? "top-[17px]" : "top-4"} ${state.property1 === "variant-4"
                ? "bg-[url(/static/img/download-14-3.png)]"
                : "bg-[url(/static/img/download-14-4.png)]"
              } ${state.property1 === "variant-4" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-4" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-4" ? "left-[17px]" : "left-4"
              } ${state.property1 === "variant-4" ? "top-[17px]" : "top-4"} ${state.property1 === "variant-4"
                ? "bg-[url(/static/img/download-13-3.png)]"
                : "bg-[url(/static/img/download-13-4.png)]"
              } ${state.property1 === "variant-4" ? "h-[247px]" : "h-[235px]"}`}
          />
        </div>
      </div>
      <div
        className={`absolute ${state.property1 === "variant-5" ? "w-[314px]" : "w-[299px]"} ${state.property1 === "variant-5" ? "left-[936px]" : "left-[945px]"
          } ${state.property1 === "variant-5" ? "top-[-9px]" : "top-0"} ${state.property1 === "variant-5" ? "h-[368px]" : "h-[350px]"
          }`}
        onMouseEnter={() => {
          dispatch("mouse_enter_582");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave_582");
        }}
      >
        <div
          className={`shadow-drop-shadow-1 rounded-[25px] bg-white relative ${state.property1 === "variant-5" ? "w-[310px]" : "w-[295px]"
            } ${state.property1 === "variant-5" ? "h-[368px]" : "h-[350px]"}`}
        >
          <div
            className={`font-heading-7 [font-style:var(--heading-7-font-style)] tracking-[var(--heading-7-letter-spacing)] text-[length:var(--heading-7-font-size)] opacity-75 text-gray absolute font-[number:var(--heading-7-font-weight)] whitespace-nowrap leading-[var(--heading-7-line-height)] ${state.property1 === "variant-5" ? "w-[105px]" : ""
              } ${state.property1 === "variant-5" ? "left-[17px]" : "left-4"} ${state.property1 === "variant-5" ? "top-[324px]" : "top-[308px]"
              }`}
          >
            60 Collections
          </div>
          <div
            className={`font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] text-[length:var(--heading-4-font-size)] text-black absolute font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] ${state.property1 === "variant-5" ? "w-32" : ""
              } ${state.property1 === "variant-5" ? "left-[17px]" : "left-4"} ${state.property1 === "variant-5" ? "top-[289px]" : "top-[275px]"
              }`}
          >
            Rizal Park
          </div>
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-5" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-5" ? "left-[17px]" : "left-4"
              } ${state.property1 === "variant-5" ? "top-[17px]" : "top-4"} ${state.property1 === "variant-5"
                ? "bg-[url(/static/img/2022-01-29-1-4.png)]"
                : "bg-[url(/static/img/2022-01-29-1-3.png)]"
              } ${state.property1 === "variant-5" ? "h-[247px]" : "h-[235px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-5" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-5" ? "left-40" : "left-[152px]"
              } ${state.property1 === "variant-5" ? "top-[17px]" : "top-4"} ${state.property1 === "variant-5"
                ? "bg-[url(/static/img/2023-12-14-1-4.png)]"
                : "bg-[url(/static/img/2023-12-14-1-3.png)]"
              } ${state.property1 === "variant-5" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-5" ? "w-[133px]" : "w-[127px]"} ${state.property1 === "variant-5" ? "left-40" : "left-[152px]"
              } ${state.property1 === "variant-5" ? "top-[145px]" : "top-[138px]"} ${state.property1 === "variant-5"
                ? "bg-[url(/static/img/20230215-140627-1-4.png)]"
                : "bg-[url(/static/img/20230215-140627-1-3.png)]"
              } ${state.property1 === "variant-5" ? "h-[119px]" : "h-[113px]"}`}
          />
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "variant-2",
        };

      case "mouse_enter_575":
        return {
          property1: "variant-4",
        };

      case "mouse_enter_582":
        return {
          property1: "variant-5",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "mouse_leave_575":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "mouse_leave_582":
        return {
          property1: "default",
        };
    }
  }

  return state;
}