import { Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import cn from "./App.module.less";
import { Footer } from "./components/footer/footer";
import { MainPage } from "./pages/mainPage";
import { Header } from "./components/header/header";

function App() {
  const { pathname } = useLocation();
  return (
    <div className={cn.app}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
