import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  property1: "default" | "variant-5" | "variant-2" | "variant-3" | "variant-4";
  className: any;
  text: string;
}

export const Group = ({ property1, className, text = "Legazpi" }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`w-[1240px] h-[350px] relative ${className}`}>
      <div
        className={`absolute ${state.property1 === "variant-2" ? "w-[314px]" : "w-[299px]"} ${
          state.property1 === "variant-2" ? "left-[-7px]" : "left-0"
        } ${state.property1 === "variant-2" ? "top-[-9px]" : "top-0"} ${
          state.property1 === "variant-2" ? "h-[368px]" : "h-[350px]"
        }`}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
      >
        <div
          className={`shadow-drop-shadow-1 rounded-[25px] bg-white relative ${
            state.property1 === "variant-2" ? "w-[310px]" : "w-[295px]"
          } ${state.property1 === "variant-2" ? "h-[368px]" : "h-[350px]"}`}
        >
          <div
            className={`font-heading-7 tracking-[var(--heading-7-letter-spacing)] [font-style:var(--heading-7-font-style)] text-[length:var(--heading-7-font-size)] opacity-75 text-gray absolute font-[number:var(--heading-7-font-weight)] whitespace-nowrap leading-[var(--heading-7-line-height)] ${
              state.property1 === "variant-2" ? "w-[115px]" : ""
            } ${state.property1 === "variant-2" ? "left-[17px]" : "left-4"} ${
              state.property1 === "variant-2" ? "top-[324px]" : "top-[308px]"
            }`}
          >
            200 Collections
          </div>
          <div
            className={`font-heading-4 tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)] text-[length:var(--heading-4-font-size)] text-black absolute font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] ${
              state.property1 === "variant-2" ? "w-[142px]" : ""
            } ${state.property1 === "variant-2" ? "left-[17px]" : "left-4"} ${
              state.property1 === "variant-2" ? "top-[289px]" : "top-[275px]"
            }`}
          >
            {state.property1 === "default" && <>{text}</>}

            {["variant-2", "variant-3", "variant-4", "variant-5"].includes(state.property1) && <>Intramuros</>}
          </div>
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-2" ? "w-[133px]" : "w-[127px]"} ${
              state.property1 === "variant-2" ? "left-[17px]" : "left-4"
            } ${state.property1 === "variant-2" ? "top-[17px]" : "top-4"} ${
              state.property1 === "default" ? "h-[242px]" : state.property1 === "variant-2" ? "h-[247px]" : "h-[235px]"
            } ${
              state.property1 === "default"
                ? "bg-[url(/static/img/unnamed-3.png)]"
                : state.property1 === "variant-2"
                ? "bg-[url(/static/img/20221024-130305-1.png)]"
                : "bg-[url(/static/img/20221024-130305-1-3.png)]"
            }`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-2" ? "w-[135px]" : "w-32"} ${
              state.property1 === "variant-2" ? "left-[159px]" : "left-[151px]"
            } ${state.property1 === "variant-2" ? "top-[17px]" : "top-4"} ${
              state.property1 === "default"
                ? "bg-[url(/static/img/photo0jpg-1.png)]"
                : state.property1 === "variant-2"
                ? "bg-[url(/static/img/2021-12-27-1.png)]"
                : "bg-[url(/static/img/2021-12-27-1-3.png)]"
            } ${state.property1 === "variant-2" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-2" ? "w-[135px]" : "w-32"} ${
              state.property1 === "variant-2" ? "left-[159px]" : "left-[151px]"
            } ${state.property1 === "variant-2" ? "top-[145px]" : "top-[138px]"} ${
              state.property1 === "default"
                ? "bg-[url(/static/img/mayon-volcano-1.png)]"
                : state.property1 === "variant-2"
                ? "bg-[url(/static/img/2022-05-03-1.png)]"
                : "bg-[url(/static/img/2022-05-03-1-3.png)]"
            } ${state.property1 === "variant-2" ? "h-[119px]" : "h-[113px]"}`}
          />
        </div>
      </div>
      <div
        className={`absolute ${state.property1 === "variant-3" ? "w-[314px]" : "w-[299px]"} ${
          state.property1 === "variant-3" ? "left-[310px]" : "left-[315px]"
        } ${state.property1 === "variant-3" ? "top-[-9px]" : "top-0"} ${
          state.property1 === "variant-3" ? "h-[368px]" : "h-[350px]"
        }`}
      >
        <div
          className={`shadow-drop-shadow-1 rounded-[25px] bg-white relative ${
            state.property1 === "variant-3" ? "w-[310px]" : "w-[295px]"
          } ${state.property1 === "variant-3" ? "h-[368px]" : "h-[350px]"}`}
        >
          <div
            className={`font-heading-7 [font-style:var(--heading-7-font-style)] tracking-[var(--heading-7-letter-spacing)] text-[length:var(--heading-7-font-size)] opacity-75 text-gray absolute font-[number:var(--heading-7-font-weight)] whitespace-nowrap leading-[var(--heading-7-line-height)] ${
              state.property1 === "variant-3" ? "w-[111px]" : ""
            } ${state.property1 === "variant-3" ? "left-[17px]" : "left-4"} ${
              state.property1 === "variant-3" ? "top-[324px]" : "top-[308px]"
            }`}
          >
            150 Collections
          </div>
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-3" ? "w-[138px]" : "w-[131px]"} ${
              state.property1 === "variant-3" ? "left-[17px]" : "left-4"
            } ${state.property1 === "variant-3" ? "top-[17px]" : "top-4"} ${
              state.property1 === "variant-3" ? "h-[247px]" : "h-[235px]"
            } ${
              state.property1 === "default"
                ? "bg-[url(/static/img/museo-del-seminario-conciliar-1.png)]"
                : state.property1 === "variant-3"
                ? "bg-[url(/static/img/images-4-1.png)]"
                : "bg-[url(/static/img/images-4-3.png)]"
            }`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-3" ? "w-[133px]" : "w-[127px]"} ${
              state.property1 === "variant-3" ? "left-40" : "left-[152px]"
            } ${state.property1 === "variant-3" ? "top-[17px]" : "top-4"} ${
              state.property1 === "default"
                ? "bg-[url(/static/img/history-1.png)]"
                : state.property1 === "variant-3"
                ? "bg-[url(/static/img/images-5-1.png)]"
                : "bg-[url(/static/img/images-5-3.png)]"
            } ${state.property1 === "variant-3" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] text-[length:var(--heading-4-font-size)] text-black absolute font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] ${
              state.property1 === "variant-3" ? "w-[203px]" : ""
            } ${state.property1 === "variant-3" ? "left-[17px]" : "left-4"} ${
              state.property1 === "variant-3" ? "top-[289px]" : "top-[275px]"
            }`}
          >
            {state.property1 === "default" && <>Naga</>}

            {["variant-2", "variant-3", "variant-4", "variant-5"].includes(state.property1) && <>Puerto princesa</>}
          </div>
          <div
            className={`absolute ${state.property1 === "variant-3" ? "w-[133px]" : "w-[127px]"} ${
              state.property1 === "variant-3" ? "left-40" : "left-[152px]"
            } ${state.property1 === "variant-3" ? "top-[145px]" : "top-[138px]"} ${
              state.property1 === "default" ? "bg-cover" : "bg-[100%_100%]"
            } ${
              state.property1 === "default"
                ? "bg-[url(/static/img/nice-place-to-spend-some-1.png)]"
                : state.property1 === "variant-3"
                ? "bg-[url(/static/img/images-6-1.png)]"
                : "bg-[url(/static/img/images-6-3.png)]"
            } ${state.property1 === "variant-3" ? "h-[119px]" : "h-[113px]"} ${
              state.property1 === "default" ? "bg-[50%_50%]" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`absolute ${state.property1 === "variant-4" ? "w-[314px]" : "w-[299px]"} ${
          state.property1 === "variant-4" ? "left-[622px]" : "left-[630px]"
        } ${state.property1 === "variant-4" ? "top-[-9px]" : "top-0"} ${
          state.property1 === "variant-4" ? "h-[368px]" : "h-[350px]"
        }`}
      >
        <div
          className={`shadow-drop-shadow-1 rounded-[25px] bg-white relative ${
            state.property1 === "variant-4" ? "w-[310px]" : "w-[295px]"
          } ${state.property1 === "variant-4" ? "h-[368px]" : "h-[350px]"}`}
        >
          <div
            className={`font-heading-7 [font-style:var(--heading-7-font-style)] tracking-[var(--heading-7-letter-spacing)] text-[length:var(--heading-7-font-size)] opacity-75 text-gray absolute font-[number:var(--heading-7-font-weight)] whitespace-nowrap leading-[var(--heading-7-line-height)] ${
              state.property1 === "variant-4" ? "w-[106px]" : ""
            } ${state.property1 === "variant-4" ? "left-[17px]" : "left-4"} ${
              state.property1 === "variant-4" ? "top-[324px]" : "top-[308px]"
            }`}
          >
            50 Collections
          </div>
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-4" ? "w-[133px]" : "w-[127px]"} ${
              state.property1 === "variant-4" ? "left-[17px]" : "left-4"
            } ${state.property1 === "variant-4" ? "top-[17px]" : "top-4"} ${
              state.property1 === "variant-4" ? "h-[247px]" : "h-[235px]"
            } ${
              state.property1 === "variant-4"
                ? "bg-[url(/static/img/download-1-3.png)]"
                : "bg-[url(/static/img/download-1-4.png)]"
            }`}
          />
          <div
            className={`font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] text-[length:var(--heading-4-font-size)] text-black absolute font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] ${
              state.property1 === "variant-4" ? "w-[190px]" : ""
            } ${state.property1 === "variant-4" ? "left-[17px]" : "left-4"} ${
              state.property1 === "variant-4" ? "top-[289px]" : "top-[275px]"
            }`}
          >
            Kayangan lake
          </div>
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-4" ? "w-[133px]" : "w-[127px]"} ${
              state.property1 === "variant-4" ? "left-40" : "left-[152px]"
            } ${state.property1 === "variant-4" ? "top-[17px]" : "top-4"} ${
              state.property1 === "variant-4"
                ? "bg-[url(/static/img/download-2-3.png)]"
                : "bg-[url(/static/img/download-2-4.png)]"
            } ${state.property1 === "variant-4" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-4" ? "w-[133px]" : "w-[127px]"} ${
              state.property1 === "variant-4" ? "left-40" : "left-[152px]"
            } ${state.property1 === "variant-4" ? "top-[145px]" : "top-[138px]"} ${
              state.property1 === "variant-4"
                ? "bg-[url(/static/img/download-3-3.png)]"
                : "bg-[url(/static/img/download-3-4.png)]"
            } ${state.property1 === "variant-4" ? "h-[119px]" : "h-[113px]"}`}
          />
        </div>
      </div>
      <div
        className={`absolute ${state.property1 === "variant-5" ? "w-[314px]" : "w-[299px]"} ${
          state.property1 === "variant-5" ? "left-[937px]" : "left-[945px]"
        } ${state.property1 === "variant-5" ? "top-[-9px]" : "top-0"} ${
          state.property1 === "variant-5" ? "h-[368px]" : "h-[350px]"
        }`}
        onMouseEnter={() => {
          dispatch("mouse_enter_727");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave_727");
        }}
      >
        <div
          className={`shadow-drop-shadow-1 rounded-[25px] bg-white relative ${
            state.property1 === "variant-5" ? "w-[310px]" : "w-[295px]"
          } ${state.property1 === "variant-5" ? "h-[368px]" : "h-[350px]"}`}
        >
          <div
            className={`font-heading-7 [font-style:var(--heading-7-font-style)] tracking-[var(--heading-7-letter-spacing)] text-[length:var(--heading-7-font-size)] opacity-75 text-gray absolute font-[number:var(--heading-7-font-weight)] whitespace-nowrap leading-[var(--heading-7-line-height)] ${
              state.property1 === "variant-5" ? "w-[109px]" : ""
            } ${state.property1 === "variant-5" ? "left-[17px]" : "left-4"} ${
              state.property1 === "variant-5" ? "top-[324px]" : "top-[308px]"
            }`}
          >
            125 Collections
          </div>
          <div
            className={`font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] text-[length:var(--heading-4-font-size)] text-black absolute font-[number:var(--heading-4-font-weight)] leading-[var(--heading-4-line-height)] ${
              state.property1 === "variant-5" ? "w-[173px]" : ""
            } ${state.property1 === "variant-5" ? "left-[17px]" : "left-4"} ${
              state.property1 === "variant-5" ? "top-[289px]" : "top-[275px]"
            }`}
          >
            Fort Santiago
          </div>
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-5" ? "w-[133px]" : "w-[127px]"} ${
              state.property1 === "variant-5" ? "left-40" : "left-[152px]"
            } ${state.property1 === "variant-5" ? "top-[145px]" : "top-[138px]"} ${
              state.property1 === "variant-5"
                ? "bg-[url(/static/img/2024-04-14-1-4.png)]"
                : "bg-[url(/static/img/2024-04-14-1-3.png)]"
            } ${state.property1 === "variant-5" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-5" ? "w-[133px]" : "w-[127px]"} ${
              state.property1 === "variant-5" ? "left-40" : "left-[152px]"
            } ${state.property1 === "variant-5" ? "top-[17px]" : "top-4"} ${
              state.property1 === "variant-5"
                ? "bg-[url(/static/img/20220531-143702-1-4.png)]"
                : "bg-[url(/static/img/20220531-143702-1-3.png)]"
            } ${state.property1 === "variant-5" ? "h-[119px]" : "h-[113px]"}`}
          />
          <div
            className={`bg-cover bg-[50%_50%] absolute ${state.property1 === "variant-5" ? "w-[133px]" : "w-[127px]"} ${
              state.property1 === "variant-5" ? "left-[17px]" : "left-4"
            } ${state.property1 === "variant-5" ? "top-[17px]" : "top-4"} ${
              state.property1 === "variant-5" ? "h-[247px]" : "h-[235px]"
            } ${
              state.property1 === "variant-5"
                ? "bg-[url(/static/img/20230605-142938-1-4.png)]"
                : "bg-[url(/static/img/20230605-142938-1-3.png)]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter_727":
        return {
          property1: "variant-5",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "variant-5",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "mouse_leave_727":
        return {
          property1: "default",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

Group.propTypes = {
  property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-3", "variant-4"]),
  text: PropTypes.string,
};
