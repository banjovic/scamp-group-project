import { Outlet } from "react-router-dom";
import { useMatch } from "react-router-dom";

import Header from "./components/header/Header";

const App = () => {
  const isMatched = useMatch("/cart");

  return (
    <div className={`${isMatched ? "bg-white" : "bg-darkGrey"}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
