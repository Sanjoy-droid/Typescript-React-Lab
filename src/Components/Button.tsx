import { useEffect, useRef, useState } from "react";

// const convertToArray =<T,> (value:T): T[] => {
//   return [value];
// };

// function convertToArray<T>(value: T): T[] {
//   return [value];
// }

// convertToArray(5);
// convertToArray("hello ");

type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

export default function Button<T>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  countHistory.push(countValue);
  return (
    <>
      <div>
        <button>click</button>
      </div>
    </>
  );
}
