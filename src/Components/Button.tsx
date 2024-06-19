// function convertCurrency(amount: number, currency: string) {
// ...
// }

// convertCurrency(100, "USD");

// const ExampleComponent: React:FC=()=>{}

// type Color = "red" | "blue" | "green" | "yellow";

//Interface

interface ButtonProps {
  type: "button" | "submit" | "reset";
  color: "red" | "blue" | "green" | "yellow";
}
interface SuperButtonProps extends ButtonProps {
  size: "small" | "medium" | "large";
}

// Type Alias
// type ButtonProps = {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green" | "yellow";
// };

// type SuperButtonProps = ButtonProps & {
//   size: "small" | "medium" | "large";
// };

export default function Button({}: ButtonProps) {
  // const handleClick = () => {};

  return (
    <>
      <div>
        <button>CLICK ME</button>
      </div>
    </>
  );
}
