// function convertCurrency(amount: number, currency: string) {
// ...
// }

// convertCurrency(100, "USD");

// const ExampleComponent: React:FC=()=>{}

// type Color = "red" | "blue" | "green" | "yellow";

type ButtonProps = {
  children: React.ReactNode;
};
export default function Button({ children }: ButtonProps) {
  // console.log(pillShaped);
  // console.log(fontSize);
  // console.log(backgroundColor);
  // console.log(textColor);
  // console.log(padding);

  return (
    <>
      <div>
        <button>{children}</button>
      </div>
    </>
  );
}
