import React from "react";
import Header from "../components/header";

const Add = () => {
  return (
    <>
      <Header />
      <div class="w-full min-h-screen px-10 py-5 text-gray-900">
        <h1 class="text-xl">Create a new post.</h1>
        <hr class="mt-3 bg-neutral-900"></hr>
        <form action="/createpost" method="post" enctype="multipart/form-data">
          <input
            class="block w-1/3 px-3 py-2 mt-2 "
            type="file"
            name="postimage"
          />
          <input
            class="text-black block w-1/3 px-3 py-2 mt-2 border-2 rounded-md"
            type="text"
            name="filetitle"
            placeholder="Title"
          />
          <textarea
            class="text-black block w-1/3 h-60 px-3 py-2 mt-2 border-2 rounded-md"
            type="text"
            name="filecaption"
            placeholder="Description"
          ></textarea>
          <input
            class="text-white block w-1/3 px-3 py-2 mt-2 bg-red-700 rounded-md"
            type="submit"
            value="Create Post"
          />
        </form>
      </div>
    </>
  );
};

export default Add;
