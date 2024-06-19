// function convertCurrency(amount: number, currency: string) {
// ...
// }

import { useState } from "react";

// convertCurrency(100, "USD");

// const ExampleComponent: React:FC=()=>{}

// type Color = "red" | "blue" | "green" | "yellow";

//Interface

// interface ButtonProps {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green" | "yellow";
// }
// interface SuperButtonProps extends ButtonProps {
//   size: "small" | "medium" | "large";
// }

// Type Alias
// type ButtonProps = {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green" | "yellow";
// };

// type SuperButtonProps = ButtonProps & {
//   size: "small" | "medium" | "large";
// };

type User = {
  name: string;
  age: number;
};

export default function Button() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState("tackeis castle");

  const [user, setUser] = useState<User | null>(null);

  const name = user?.name;
  return (
    <>
      <div>
        <button>CLICK ME</button>
        {/* {count} */}
        {text}
      </div>
    </>
  );
}
