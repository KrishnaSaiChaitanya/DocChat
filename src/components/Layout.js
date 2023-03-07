import { Button } from "primereact/button";
import { Link, Outlet } from "react-router-dom";
import { Zoom, Fade } from "react-reveal";

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
      <Fade left duration={"1000"}>
        <div
          className="lg:col-3 md:col-4 border-circle border-noround-left"
          style={{
            backgroundColor: "#989eaa",
            height: "90vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div class="grid m-8 pt-8 pb-8">
            <div class="col-12">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button label="Home" outlined />
              </Link>
            </div>
            <div class="col-12">
              <Link to="/room/48698hd" style={{ textDecoration: "none" }}>
                <Button label="Room 1" outlined />
              </Link>
            </div>
            <div class="col-12">
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button label="Room 2" outlined />
              </Link>
            </div>
            <div class="col-12">
              <Link to="/room/647bjd" style={{ textDecoration: "none" }}>
                <Button label="Room 3" outlined />
              </Link>
            </div>
            <div class="col-12">
              <Link to="/ro" style={{ textDecoration: "none" }}>
                <Button label="Room 4" outlined />
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
