import React, { useState } from "react";
import fetcher from "../api/axiosInstance";
import CatCard from "./CatCard";

export default function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  fetcher("category").then((data) => {
    setData(data?.data?.result);
    setIsLoading(false);
  });
  if (isLoading) {
    <p>Loading</p>;
  }
  return (
    <div className="overflow-x-auto border rounded-lg shadow-md">
      <table className="table table-compact w-full">
        <caption className="bg-green-600 py-3 text-white  font-bold "></caption>
        <tbody>
          <tr>
            <td>
              {data.map((cat, index) => (
                <CatCard key={index} cat={cat} />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
