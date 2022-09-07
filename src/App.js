import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="bg-darkGrey">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
