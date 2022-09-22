import React, { useState } from "react";

const Card = ({ dua }) => {
  const { refference_en, translation_en } = dua;
  return (
    <div>
      <div className="border rounded-lg shadow-lg">
        <div className="ml-5 m">
          {/* top eng */}
          {/* <h1 className="my-4 text-green-600 font-bold ">
            The servant is dependent on his lord
          </h1> */}
          <hr className="my-5" />
          <p>{translation_en}</p>

          <h4 className="mt-5 text-green-600 font-bold">Reference</h4>
          <p className="">{refference_en}</p>
          <hr className="my-5" />
        </div>
      </div>
    </div>
  );
};

export default Card;
