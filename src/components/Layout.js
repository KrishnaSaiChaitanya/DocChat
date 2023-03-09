import { Button } from "primereact/button";
import { Link, Outlet } from "react-router-dom";
import { Zoom, Fade } from "react-reveal";
import Menu from "./assets/Menu";

function Layout() {
  return (
    <div
      className="grid"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ position: "absolute", top: "44%", left: "21.5%" }}>
        <Menu />
      </div>
      <Fade left duration={"1000"}>
        <div
          className="grid lg:col-3 md:col-4 "
          style={{
            backgroundColor: "#989eaa",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="col-12 grid mt-6">
            <div
              className="col-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="../images/logo.png" height={50} />
              </div>
            </div>
            <div className="col-8">
              <h1 className="text-start ">Doc Chat</h1>
            </div>
            {/* <div className="col-2">
              <Menu />
            </div> */}
          </div>
          <div class=" col-12 grid m-8 mt-3 pt-3 pb-8">
            <div class="col-12">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button label="Home" outlined rounded />
              </Link>
            </div>
            <div class="col-12">
              <Link to="/room/48698hd" style={{ textDecoration: "none" }}>
                <Button label="Room 1" outlined rounded />
              </Link>
            </div>
            <div class="col-12">
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button label="Room 2" outlined rounded />
              </Link>
            </div>
            <div class="col-12">
              <Link to="/room/647bjd" style={{ textDecoration: "none" }}>
                <Button label="Room 3" outlined rounded />
              </Link>
            </div>
            <div class="col-12">
              <Link to="/ro" style={{ textDecoration: "none" }}>
                <Button label="Room 4" outlined rounded />
              </Link>
            </div>
            <div className="col-12 pt-3">
              <Button label="view more ..." text />
            </div>
          </div>
        </div>
      </Fade>
      <div className="lg:col-9 md:col-8 " style={{ height: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
