import React from "react";
import { useParams } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import { Chart } from "chart.js";
import Chat from "../room_assets/Chat";
import Upload from "../room_assets/Upload";
import Stats from "../room_assets/Stats";
import Files from "../room_assets/Files";

const RoomLayout = () => {
  const id = useParams();
  console.log(id);
  return (
    <div style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
      <h1 className="text-center mt-7">Room Here .., </h1>
      <div className="p-5">
        <TabView>
          <TabPanel
            className="pr-5"
            header="Files"
            headerClassName="flex align-content-between"
          >
            <Files />
          </TabPanel>
          <TabPanel
            header="Upload"
            className="pr-5"
            headerClassName="flex align-content-between"
          >
            <Upload />
          </TabPanel>
          <TabPanel
            header="Chat"
            className="pr-5"
            headerClassName="flex align-content-between"
          >
            <Chat />
          </TabPanel>
          <TabPanel
            header="Stats"
            className="pr-5"
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
