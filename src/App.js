import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="bg-darkGrey">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
