import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { Zoom } from "react-reveal";
import { Link, useNavigate, useParams } from "react-router-dom";
import Search from "../components/assets/Search";
import Splliter from "../components/assets/Splliter";

const Files = () => {
  let params = useParams();
  const navigate = useNavigate();
  console.log(params["*"]);
  const [visible, setVisible] = useState(false);
  const header = <h2 className="text-center">File splliter</h2>;
  return (
    <div style={{ width: "100%" }}>
      <div class="grid grid-nogutter">
        <div className="col-12 flex justify-content-center align-items-center ">
          <h3 className="text-center mr-4">
            Path : {"  "}/ {params["*"]}{" "}
          </h3>
          <Button text icon="pi pi-copy" rounded size="lg" />
        </div>
        <div className="col-12 md:col-9 grid grid-nogutter">
          <div
            className="col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <Search />
          </div>
          <div class="col-4 p-3 ">
            <Zoom duration={1100} delay={600}>
              <img src="/../images/folder.jpg" height={120} id="temp_img" />
            </Zoom>
          </div>
          <div class="col-4 p-3 ">
            <Zoom duration={1100} delay={600}>
              <img src="/../images/folder.jpg" height={120} id="temp_img" />
            </Zoom>
          </div>{" "}
          <div class="col-4 p-3 ">
            <Zoom duration={1100} delay={600}>
              <img src="/../images/folder.jpg" height={120} id="temp_img" />
            </Zoom>
          </div>{" "}
          <div class="col-4 p-3 ">
            <Zoom duration={1100} delay={600}>
              <img src="/../images/folder.jpg" height={120} id="temp_img" />
            </Zoom>
          </div>{" "}
          <div class="col-4 p-3 ">
            <Zoom duration={1100} delay={600}>
              <Link to={"yeah hoo....."}>
                <img src="/../images/folder.jpg" height={120} id="temp_img" />
              </Link>
            </Zoom>
          </div>
          <div class="col-4 p-3 ">
            <Zoom duration={1100} delay={600}>
              <Link to={"dfh"}>
                <img src="/../images/folder.jpg" height={120} id="temp_img" />
              </Link>
            </Zoom>
          </div>
        </div>
        <div
          className="col-12 md:col-3 p-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Button
              label="open File Splitter"
              icon="pi pi-external-link"
              text
              raised
              rounded
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
      </div>

      <Dialog
        header={header}
        visible={visible}
        style={{ width: "80vw", height: "85vh" }}
        onHide={() => setVisible(false)}
        maximizable
      >
        <Splliter />
      </Dialog>
    </div>
  );
};

export default Files;
