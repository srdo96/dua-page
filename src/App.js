import "./App.css";
import Categories from "./Components/Categories";

function App() {
  return (
    <div>
      <h1 className="text-6xl">Dua Page</h1>
      <div className="grid grid-cols-2">
        <Categories />
      </div>
    </div>
  );
}

export default App;
