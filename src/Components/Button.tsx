// function convertCurrency(amount: number, currency: string) {
// ...
// }

import { ComponentProps } from "react";

// convertCurrency(100, "USD");

// const ExampleComponent: React:FC=()=>{}

// type Color = "red" | "blue" | "green" | "yellow";

//Interface

// interface IButtonProps {
//   text: string;
//   count: number;
// }

// Type Alias
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button({ type, autoFocus }: ButtonProps) {
  // const handleClick = () => {};

  return (
    <>
      <div>
        <button>CLICK ME</button>
      </div>
    </>
  );
}
