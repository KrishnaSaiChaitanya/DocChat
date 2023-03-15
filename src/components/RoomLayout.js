import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import { Chart } from "chart.js";
import Chat from "../room_assets/Chat";
import Upload from "../room_assets/Upload";
import Stats from "../room_assets/Stats";
import Files from "../room_assets/Files";
import Menu from "./assets/Menu";

const RoomLayout = () => {
  const [id, setid] = useState({});
  const num = useParams();
  useEffect(() => {
    setid(num);
    console.log(id.id);
  }, [num]);

  return (
    <div style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
      <div className="grid grid-nogutter">
        <div className="col-12 grid grid-nogutter mt-5 mb-5">
          {/* <div
            className="col-1"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
          <div className="col-9">
            <h1 className="text-start ">Doc Chat</h1>
          </div>
          <div className="col-2">
            <Menu />
          </div> */}
        </div>
      </div>
      <h2 className="text-center mt-3">Room Here .. {id.id}</h2>
      <div
        className="network_img"
        style={{ position: "absolute", bottom: "0", right: "0" }}
      >
        <img src="../images/network.jpg" height={250} />
      </div>
      <div className=" pt-3">
        <TabView>
          <TabPanel
            className=""
            header="Files"
            leftIcon="pi pi-file mr-2"
            headerClassName="flex align-content-between"
          >
            <Files />
          </TabPanel>
          <TabPanel
            header="Upload"
            leftIcon="pi pi-upload mr-2"
            className=""
            headerClassName="flex align-content-between"
          >
            <Upload />
          </TabPanel>
          <TabPanel
            header="Chat"
            className=""
            leftIcon="pi pi-comments mr-2"
            headerClassName="flex align-content-between"
          >
            <Chat />
          </TabPanel>
          <TabPanel
            header="Stats"
            className=""
            leftIcon="pi pi-chart-bar mr-2"
            headerClassName="flex align-content-between"
          >
            <Stats />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default RoomLayout;
