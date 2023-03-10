import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { Zoom } from "react-reveal";
import Search from "../components/assets/Search";
import Splliter from "../components/assets/Splliter";

const Files = () => {
  const [visible, setVisible] = useState(false);
  const header = <h2 className="text-center">File splliter</h2>;
  return (
    <div style={{ width: "100%" }}>
      <div class="grid grid-nogutter">
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
            <Zoom bottom duration={1100}>
              <img src="../images/folder.jpg" height={120} />
            </Zoom>
          </div>
          <div class="col-4 p-3 ">
            <Zoom bottomduration={1100}>
              <img src="../images/folder.jpg" height={120} />
            </Zoom>
          </div>{" "}
          <div class="col-4 p-3 ">
            <Zoom bottomduration={1100}>
              <img src="../images/folder.jpg" height={120} />
            </Zoom>
          </div>{" "}
          <div class="col-4 p-3 ">
            <Zoom bottom duration={1100}>
              <img src="../images/folder.jpg" height={120} />
            </Zoom>
          </div>{" "}
          <div class="col-4 p-3 ">
            <Zoom bottomduration={1100}>
              <img src="../images/folder.jpg" height={120} />
            </Zoom>
          </div>
          <div class="col-4 p-3 ">
            <Zoom bottomduration={1100}>
              <img src="../images/folder.jpg" height={120} />
            </Zoom>
          </div>
        </div>
        <div
          className="col-12 md:col-3 p-3"
          style={{
            display: "flex",
            alignItems: "center",
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
