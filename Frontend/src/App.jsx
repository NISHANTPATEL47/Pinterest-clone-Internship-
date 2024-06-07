import React, { useEffect } from "react";
import Header from "./components/header";

function App() {
  useEffect(() => {
    const uploadIcon = document.querySelector("#uploadicon");
    const uploadInput = document.querySelector("#uploadform input");
    const uploadForm = document.querySelector("#uploadform");

    if (uploadIcon && uploadInput && uploadForm) {
      uploadIcon.addEventListener("click", function () {
        uploadInput.click();
      });

      uploadInput.addEventListener("change", function () {
        uploadForm.submit();
      });
    }

    return () => {
      if (uploadIcon && uploadInput && uploadForm) {
        uploadIcon.removeEventListener("click", function () {
          uploadInput.click();
        });

        uploadInput.removeEventListener("change", function () {
          uploadForm.submit();
        });
      }
    };
  }, []);

  const user = { fullname: "John Doe", username: "johndoe", posts: [] };

  return (
    <>
      <Header />
      <form
        id="uploadform"
        hidden
        action="/fileupload"
        method="post"
        enctype="multipart/form-data"
      >
        <input type="file" name="image" />
      </form>
      <div className="cardplate mt-10 flex items-center flex-col">
        <div className="relative">
          <span
            id="uploadicon"
            className="w-8 h-8 absolute bottom-0 right-0 rounded-full flex items-center justify-center bg-zinc-200"
          >
            <i className="text-zinc-800 ri-pencil-fill"></i>
          </span>
          <div className="profile-picture w-32 h-32 bg-zinc-300 overflow-hidden rounded-full object-cover">
            <img
              className="w-full h-full object-cover"
              src={`/images/uploads/${ user.profileImage}`}
              alt=""
            />
          </div>
        </div>
        <h1 className="name text-3xl text-neutral-900 font-semibold">
          {user.fullname}
        </h1>
        <div className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="rgba(115,115,115,1)"
          >
            <path d="M13.3717 2.09442C8.42512 1.41268 3.73383 4.48505 2.38064 9.29256C1.02745 14.1001 3.42711 19.1692 8.00271 21.1689C7.94264 20.4008 7.99735 19.628 8.16502 18.8761C8.34964 18.0374 9.46121 13.4132 9.46121 13.4132C9.23971 12.9173 9.12893 12.379 9.13659 11.8359C9.13659 10.3509 9.99353 9.24295 11.0597 9.24295C11.4472 9.23718 11.8181 9.40028 12.0758 9.68981C12.3335 9.97934 12.4526 10.3667 12.402 10.751C12.402 11.6512 11.8236 13.0131 11.5228 14.2903C11.4014 14.7656 11.5131 15.2703 11.8237 15.65C12.1343 16.0296 12.6069 16.2389 13.0967 16.2139C14.9944 16.2139 16.2675 13.7825 16.2675 10.9126C16.2675 8.71205 14.8098 7.0655 12.1243 7.0655C10.826 7.01531 9.56388 7.4996 8.63223 8.40543C7.70057 9.31126 7.18084 10.5595 7.19423 11.859C7.16563 12.5722 7.39566 13.2717 7.84194 13.8287C8.01361 13.9564 8.07985 14.1825 8.00425 14.3827C7.9581 14.5673 7.84194 15.0059 7.79578 15.1675C7.77632 15.278 7.70559 15.3728 7.60516 15.4228C7.50473 15.4729 7.38651 15.4724 7.28654 15.4214C5.9019 14.8674 5.24957 13.3439 5.24957 11.6051C5.24957 8.75822 7.63424 5.3497 12.4036 5.3497C16.1998 5.3497 18.723 8.1273 18.723 11.0972C18.723 15.0059 16.5468 17.9451 13.3298 17.9451C12.3526 17.9761 11.4273 17.5061 10.8759 16.6986C10.8759 16.6986 10.2974 19.0146 10.1835 19.4531C9.95101 20.2099 9.60779 20.9281 9.16505 21.5844C10.0877 21.8643 11.0471 22.0044 12.0113 22C14.6636 22.0017 17.2078 20.9484 19.0829 19.072C20.958 17.1957 22.0099 14.6504 22.0069 11.9975C22.004 7.00306 18.3183 2.77616 13.3717 2.09442Z"></path>
          </svg>
          <h3 className="username text-md text-neutral-500 flex">
            {user.username}
          </h3>
        </div>
        <a
          href="/edit"
          className=" mt-3 px-7 py-2 bg-zinc-300 rounded-full text-sm font-medium"
        >
          Edit
        </a>
        <a
          href="/add"
          className="px-10 py-2 rounded-lg bg-red-600 text-white text-sm font-medium my-5"
        >
          Add New Post
        </a>
      </div>

      <div className="cards px-6 flex flex-wrap gap-10 items-start">
        <div className="card">
          <div className="w-52 h-40 bg-zinc-200 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={`/images/uploads/${ user?.posts[0]?.image}`}
              alt=""
            />
          </div>
          <a
            href="/show/post"
            className=" inline-block text-xl font-semibold mt-5"
          >
            Your Uploaded Pins
          </a>
          <h5 className="text-sm font-medium">
            {user.posts.length} Pins
          </h5>
        </div>
      </div>
    </>
  );
}

export default App;
