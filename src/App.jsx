//import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/ContextProvider";
function App() {
  //const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h2 className="text-4xl">Welcome to Our site🙏🙏</h2>
      <Login />

      <Profile />
    </UserContextProvider>
  );
}

export default App;
