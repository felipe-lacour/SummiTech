

import { useState, useEffect } from "react";
import { useContext } from "react";
import { LogInContext } from "../../context/LogInContext";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import { LogInButton } from "./LogInButton";
import { SignInButton } from "./SignInButton";

export const LogIn = () => {
  let user;
  let value;

  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
    repeatEmail: '',
    repeatPassword: ''
  })
  const [logIn, setLogIn] = useState({
    email: '',
    password: ''
  })
  const {setLoggedIn} = useContext(LogInContext)

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('firebase:authUser')) {
       value = localStorage.getItem(key);
       break;
    }
  }

  if(value){
    user = JSON.parse(value);
  }

  useEffect(() => {
    if (user != null) {
      setLoggedIn(user);
    }
  }, [user, setLoggedIn]);

  return(
    <div>
      <Header/>
      <div className="sm:flex justify-center gap-8">
        <div className="flex flex-col py-6 my-12 w-fit border rounded-xl bg-white mx-auto sm:mx-0">
          <h2 className="mb-4 text-xl font-bold">Sign In</h2>
          <form className="flex flex-col ">
            <input type="email" placeholder="Email" value={signIn.email} onChange={(e) => setSignIn({...signIn, email: e.target.value})} required  className="p-2 w-80 border-b outline-none" autoComplete="email"/>
            <input type="email" placeholder="Repeat Email" value={signIn.repeatEmail} onChange={(e) => setSignIn({...signIn, repeatEmail: e.target.value})}className={`${signIn.email !== '' ?(signIn.repeatEmail === signIn.email? "outline-green-600" : "outline-red-600 ") : ''} p-2 border-b`} autoComplete="email"/>
            <input type="password" placeholder="Password" value={signIn.password} onChange={(e) => setSignIn({...signIn, password: e.target.value})} required className="p-2 border-b outline-none" autoComplete="password"/>
            <input type="password" placeholder="Repeat Password" value={signIn.repeatPassword} onChange={(e) => setSignIn({...signIn, repeatPassword: e.target.value})} className={`${signIn.password !== '' ?(signIn.repeatPassword === signIn.password? "outline-green-600" : "outline-red-600") : ''} p-2`} autoComplete="password"/>
            <SignInButton user={user} email={signIn.email} password={signIn.password} setLoggedIn={setLoggedIn}/>
          </form>
        </div>
        <div className="flex flex-col py-6 my-12 w-fit border rounded-xl bg-white mx-auto sm:mx-0 h-fit">
          <h2 className="mb-4 text-xl font-bold">Log In</h2>
          <form action="" className="flex flex-col">
            <input type="email" placeholder="Email" value={logIn.email} onChange={(e) => setLogIn({...logIn, email: e.target.value})}  className="p-2 w-80 border-b outline-none" autoComplete="email"/>
            <input type="password" placeholder="Password" value={logIn.password} onChange={(e) => setLogIn({...logIn, password: e.target.value})}  className="p-2 w-80 outline-none" autoComplete="password"/>
            <LogInButton emailLog={logIn.email} passwordLog={logIn.password} setLoggedIn={setLoggedIn} user={user}/>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 w-full hidden md:block">
        <Footer/>
      </div>
    </div>
  )
}