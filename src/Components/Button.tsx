// function convertCurrency(amount: number, currency: string) {
// ...
// }

// convertCurrency(100, "USD");

// const ExampleComponent: React:FC=()=>{}

// type Color = "red" | "blue" | "green" | "yellow";

type ButtonProps = {
  style: React.CSSProperties;
};
export default function Button({ style }: ButtonProps) {
  // console.log(pillShaped);
  // console.log(fontSize);
  // console.log(backgroundColor);
  // console.log(textColor);
  // console.log(padding);

  return (
    <>
      <div>
        <button style={style}>CLick Me</button>
      </div>
    </>
  );
}
