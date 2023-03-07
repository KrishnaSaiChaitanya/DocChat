import { Button } from "primereact/button";
import React from "react";
import { Zoom } from "react-reveal";
import { io } from "socket.io-client";
import Login from "./Signin";
const Home = () => {
  // const socket = io("http://localhost:3001");
  // socket.on("connect", () => {
  //   console.log("Connected to WebSocket server");
  // });
  return (
    <div>
      <div
        className="homeroom_img"
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Zoom duration={"1200"} delay={600}>
          <img
            src="./images/room.jpg"
            style={{ height: "70vh", padding: "30px" }}
          />
        </Zoom>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          label="Create Room"
          icon="pi pi-bolt"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap "
        />
      </div>
      <h2 className="text-center pt-3 pb-3">or</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button label="Join a room" size="lg" text />
      </div>
    </div>
  );
};

export default Home;
