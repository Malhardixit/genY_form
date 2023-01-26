import Form from "./Form";
import genY from "./assets/gen-y.png";

function App() {
  return (
    <div>
      <img
        className="md:fixed md:px-2 px:2 relative object-cover"
        src={genY}
        alt="GenY"
      />

      <Form />
    </div>
  );
}

export default App;
