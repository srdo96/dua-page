import { useState } from "react";
import fetcher from "./api/axiosInstance";
import Card from "./Components/Card";
import Categories from "./Components/Categories";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [duas, setDuas] = useState([]);
  fetcher("dua/2").then((data) => {
    setDuas(data?.data?.result);
    setIsLoading(false);
  });
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <div className="m-5">
      <h1 className="text-5xl my-9 font-poppins text-[#96a2b4]">Dua Page</h1>
      <div className="grid grid-cols-5 gap-x-7">
        <div className="col-span-2">
          <Categories />
        </div>
        <div className="col-span-3">
          {duas.map((dua, index) => (
            <Card key={index} dua={dua} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
