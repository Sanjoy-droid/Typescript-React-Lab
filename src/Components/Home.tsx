// import { Children } from "react";
import { useState } from "react";

import Button from "./Button";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button />
    </div>
  );
};

export default Home;
