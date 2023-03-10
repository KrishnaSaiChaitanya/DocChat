import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Layout from "./components/Layout";
import About from "./components/About";
import "/node_modules/primeflex/primeflex.css";
import RoomLayout from "./components/RoomLayout";
import Registration from "./components/Signup";
import Login from "./components/Signin";
import { useFavicon } from "primereact/hooks";
import Hero from "./components/Hero";

function App() {
  useFavicon("../images/logo.svg");
  return (
    <Routes>
      <Route path="/hero" element={<Hero />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="room/:id" element={<RoomLayout />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="/signup" element={<Registration />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
}

export default App;
