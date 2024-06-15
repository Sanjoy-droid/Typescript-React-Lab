import Button from "./Button";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button
        style={{
          backgroundColor: "purple",
          fontSize: 20,
          color: "yellow",
          padding: "10px 20px",
          borderRadius: 10,
          borderColor: "red",
        }}
      />
    </div>
  );
};

export default Home;
