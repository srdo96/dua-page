import Card from "./Components/Card";
import Categories from "./Components/Categories";

function App() {
  return (
    <div className="m-5">
      <h1 className="text-5xl my-9 font-poppins text-[#96a2b4]">Dua Page</h1>
      <div className="grid grid-cols-5 gap-x-7">
        <div className="col-span-2">
          <Categories />
        </div>
        <div className="col-span-3">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
