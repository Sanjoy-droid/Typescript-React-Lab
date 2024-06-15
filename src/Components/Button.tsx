// function convertCurrency(amount: number, currency: string) {
// ...
// }

// convertCurrency(100, "USD");

// const ExampleComponent: React:FC=()=>{}

type Color = "red" | "blue" | "green" | "yellow";

type ButtonProps = {
  backgroundColor?: Color;
  textColor?: Color;
  fontSize?: number;
  pillShaped?: boolean;
  padding?: [number, number, number, number];
};

export default function Button({
  backgroundColor,
  fontSize,
  pillShaped,
}: ButtonProps) {
  console.log(pillShaped);
  console.log(fontSize);
  console.log(backgroundColor);

  return (
    <>
      <div>
        <button
          className={`text-white rounded-lg  
             w-20 h-10 flex justify-center items-center bg-purple-600 `}
        >
          Button
        </button>
      </div>
    </>
  );
}
