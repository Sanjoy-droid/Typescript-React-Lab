import { useRef, useState } from "react";

const buttonTextOptions = [
  "click me!",
  "click me aganin",
  "Click me one more again",
] as const;
export default function Button() {
  return (
    <>
      <div>
        <button>
          {buttonTextOptions.map((option) => {
            return option;
          })}
        </button>
        {/* {count} */}
      </div>
    </>
  );
}
