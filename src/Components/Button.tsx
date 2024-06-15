// function convertCurrency(amount: number, currency: string) {
// ...
// }

// convertCurrency(100, "USD");

// const ExampleComponent: React:FC=()=>{}

// type Color = "red" | "blue" | "green" | "yellow";

type ButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
};
export default function Button({ setCount, count }: ButtonProps) {
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>CLICK ME</button>
      </div>
    </>
  );
}
