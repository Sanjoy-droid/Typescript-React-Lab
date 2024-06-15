// function convertCurrency(amount: number, currency: string) {
// ...
// }

// convertCurrency(100, "USD");

// const ExampleComponent: React:FC=()=>{}

type ButtonProps = {
  backgroundColor?: string;
  fontSize?: number;
  pillShaped?: boolean;
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
