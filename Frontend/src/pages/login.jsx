import React from "react";

const MyComponent = ({error}) =>{
  return(
    <div>
      {error.length>0 && (
        <p className="error font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

const Login = () => {
  return (
    <>
      <div className=" bg-white w-[90%] mx-[75px] h-screen columns-5 gap-0 fixed z-0 pt-10 overflow-hidden">
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://i.pinimg.com/236x/b3/41/6e/b3416e2688aa4d20f846aeb8127e6b3b.jpg')] bg-center bg-cover"></div>
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://i.pinimg.com/236x/23/ad/5f/23ad5fc40270120b22bea471fe3656aa.jpg')] bg-center bg-cover"></div>
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://th.bing.com/th/id/R.6a36804dbc2f964c39107abfe0cd8ea5?rik=SOYnTUTnWJ9oXg&riu=http%3a%2f%2fwww.prunderground.com%2fwp-content%2fuploads%2f2019%2f01%2fishan-seefromthesky-277746-unsplash-1-824x1024.jpg&ehk=69bfCz7v1t5XsSFJabO24Al3u%2fgG6MPmO2PzroM5yOQ%3d&risl=&pid=ImgRaw&r=0')] bg-center bg-cover"></div>
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://th.bing.com/th/id/R.fea347254dcdda2ed8f8022c8fc97c43?rik=JEOyX9VVHnj%2f%2fw&riu=http%3a%2f%2findiagate.com%2fwp-content%2fuploads%2f2020%2f09%2findiagate4.jpg&ehk=zFznD6lLlu1eXsp%2fr%2fEAV6Q9bz5vEUyg0MvHgYmoNrU%3d&risl=&pid=ImgRaw&r=0')] bg-center bg-cover"></div>
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://i.pinimg.com/236x/96/e0/4a/96e04ac53becd9f522988fc27343ac6e.jpg')] bg-center bg-cover"></div>
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://i.pinimg.com/236x/d3/49/07/d34907c96950574c15719219e0f0dd69.jpg')] bg-center bg-cover"></div>
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://i.pinimg.com/236x/48/d9/f0/48d9f0a63ac5c08b1cf2608ceb4a884f.jpg')] bg-center bg-cover"></div>
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://i.pinimg.com/236x/3e/08/94/3e0894b99543507463864c64c6b3af49.jpg')] bg-center bg-cover"></div>
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://i.pinimg.com/236x/4b/a4/97/4ba49798105ddfc0bfd11a980f18590f.jpg')] bg-center bg-cover"></div>
        <div className="cards block mt-4 w-[236px] h-[354px] rounded-lg bg-[url('https://i.pinimg.com/236x/b9/e9/8f/b9e98fe7ff81c026b488997900eb25fa.jpg')] bg-center bg-cover"></div>
      </div>
      <div className="background bg-gray-900 w-screen h-screen fixed z-10 opacity-50 "></div>

      <div className="w-full h-screen flex items-center justify-center fixed z-20">
        <div className="w-[484px] h-auto bg-white px-4 py-5 rounded-[30px] flex flex-col items-center ">
          <img
            src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png"
            alt="pin logo"
            className="w-16 h-16"
          />
          <h1 className="text-3xl pb-2 font-semibold leading-none ">
            Login account to see more
          </h1>
          { MyComponent}
          <form
            action="/App"
            method="post"
            className="w-full flex items-center flex-col"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              className=" w-1/2 px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring focus:ring-sky-500 "
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="mt-2 w-1/2 px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring focus:ring-sky-500 "
            />
            <a href="/forgot" className="font-semibold text-sm mt-2">
              Forgot your password?
            </a>
            <input
              type="submit"
              className="mt-2 mb-2 w-1/2 px-3 py-2 bg-red-600 text-white text-sm rounded-full"
              value="Login My Account"
            />
            <p className="text-xs flex flex-wrap justify-center w-64">
              By continuing, you agree to Pinterest's{" "}
              <span className="font-semibold">Terms of Service</span>and acknowledge
              you've read our<span className="font-semibold">Privacy policy.</span>
            </p>
            <div className="w-[110px] h-[1.5px] bg-neutral-200 mt-2"></div>
            <a href="/Registration" className="font-semibold text-xs">
              Not on Pinterest yet? Sign up
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
