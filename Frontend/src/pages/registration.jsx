import React from "react";
import facebooklogo from "../assets/facebook.svg";

const Registration = () => {
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
          <h1 className="text-3xl py-3 font-semibold leading-none ">
            Welcome to pinterest
          </h1>
          <form
            action="/"
            method="post"
            className="w-full flex items-center flex-col"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mt-2 w-1/2 px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring focus:ring-sky-500   "
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="mt-2 w-1/2 px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring focus:ring-sky-500  "
            />
            <input
              type="text"
              name="fullname"
              placeholder="Fullname"
              className="mt-2 w-1/2 px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring focus:ring-sky-500  "
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="mt-2 w-1/2 px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring focus:ring-sky-500  "
            />
            <a href="/forgot" className="font-medium mt-2 text-sm ">
              Forgot your password?
            </a>
            <input
              type="submit"
              className="mt-2 w-1/2 h-10 py-2 bg-red-600 text-white text-sm rounded-full"
              value="Register Account"
            />
            <p className="font-semibold mt-2">OR</p>

            <button className="mt-2 w-1/2 h-10 px-2 py-2 bg-blue-600 text-white  text-sm border-2 border-blue-600 rounded-full flex items-center gap-2">
              <img src={facebooklogo} className="w-6" alt="" />
              <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=274266067164&kid_directed_site=0&app_id=274266067164&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.2%2Fdialog%2Foauth%3Fclient_id%3D274266067164%26redirect_uri%3Dhttps%253A%252F%252Fwww.pinterest.com%252Fconnect%252Ffacebook%252F%26scope%3Dpublic_profile%252Cemail%252Cuser_friends%26display%3Dpopup%26state%3Dqi32rgijnixqbv0fgylrpenbcuwnzxfa%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D16c08ee2-fddd-42d3-80e9-64ff853041ee%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.pinterest.com%2Fconnect%2Ffacebook%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dqi32rgijnixqbv0fgylrpenbcuwnzxfa%23_%3D_&display=popup&locale=en_GB&pl_dbl=0">
                Continue with Facebook
              </a>
            </button>

            <button className="mt-2 w-1/2 h-10 px-3 py-2 bg-white text-sm text-gray-600 border-2 border-gray-300 rounded-full flex items-center gap-2">
              <img
                src="https://pngimg.com/uploads/google/google_PNG19635.png"
                className="w-7"
                alt=""
              />
              <a href="https://accounts.google.com/gsi/select?client_id=694505692171-31closf3bcmlt59aeulg2j81ej68j6hk.apps.googleusercontent.com&auto_select=true&ux_mode=popup&ui_mode=card&context=use&as=56UyJZbSBYPQsAVa35LJWg&channel_id=0d98eac6b571d687a1eda820d663eab1b9d10f35ec55d7849b74e4170c0091bf&origin=https%3A%2F%2Fwww.pinterest.com">
                Continue with Google
              </a>
            </button>
            <p className="text-xs flex flex-wrap justify-center w-64">
              By continuing, you agree to Pinterest's{" "}
              <span className="font-semibold">Terms of Service</span>and acknowledge
              you've read our<span className="font-semibold">Privacy policy.</span>
            </p>
            <div className="w-[110px] h-[1.5px] bg-neutral-200 mt-2"></div>
            <a href="/login" className="font-semibold text-xs">
              Aleady on Pinterest? Login
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
