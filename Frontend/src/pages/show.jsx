import React from "react";
import Header from "../components/header";

const Show = ({user}) => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen px-10 py-8 text-gray-900">
        <div className="cards flex flex-wrap gap-10">
          {user.posts.map((elem, index) => (
            <div key={index} className="cards w-32">
              <div className="card w-full h-auto object-cover bg-zinc-200 rounded-lg overflow-hidden">
                <img src={`/images/uploads/${elem.image}`} alt="" />
              </div>
              <h3 className="mt-2 text-md font-semibold">{elem.imageTitle}</h3>
              <h5 className="text-sm">{elem.imageText}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Show;
