import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { Tooltip } from "primereact/tooltip";
import { Zoom } from "react-reveal";
import { ScrollPanel } from "primereact/scrollpanel";

const Chat = (props) => {
  const socket = props.socketio;
  useEffect(() => {
    // Socket io
    socket.on("connection", (socket) => {
      console.log("connected ", socket.id);
    });
    socket.on("recive", (obj) => {
      displaymmessage(obj);
    });
  });
  const [connected, setconnected] = useState(false);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const displaymmessage = (val) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = val;
    div.appendChild(p);
    const styles1 = {
      display: "flex",
      margin: "3px",
      justifyContent: "start",
    };
    const styles2 = {
      // border: "1px solid black",
      padding: "12px",
      backgroundColor: "#E8F0FE",

      borderRadius: "10px",
      width: "fit-content",
    };
    Object.assign(div.style, styles1);
    Object.assign(p.style, styles2);
    console.log(div.textContent);
    document.getElementById("messageContainer").append(div);
    setValue("");
  };
  const sendmessage = (val) => {
    socket.emit("hello", val);

    // ------------------

    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = val;
    div.appendChild(p);
    const styles1 = {
      display: "flex",
      margin: "3px",
      justifyContent: "end",
    };
    const styles2 = {
      // border: "1px solid black",
      padding: "12px",
      backgroundColor: "#E8F0FE",

      borderRadius: "10px",
      width: "fit-content",
    };
    Object.assign(div.style, styles1);
    Object.assign(p.style, styles2);
    console.log(div.textContent);
    document.getElementById("messageContainer").append(div);
    setValue("");
  };
  const header = (
    <div className="grid grid-nogutter grid grid-nogutter-nogutter">
      <div className="col-2">
        <Button
          className="custom-tooltip-btn"
          type="button"
          tooltip="Current viewers"
          text
          size="lg"
          icon="pi pi-eye"
          tooltipOptions={{ position: "bottom" }}
        />
      </div>
      <div className="col-10">
        <h2 className="text-center">Chat Room ...</h2>
      </div>
    </div>
  );
  const footerContent = (
    <div className="grid grid-nogutter mt-3">
      <div className="col-8">
        <InputTextarea
          style={{ width: "50vw" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={1}
        />
      </div>

      <div className="col-4">
        <Button
          icon="pi pi-send"
          rounded
          size="lg"
          onClick={() => {
            sendmessage(value);
          }}
          texticon="pi pi-check"
          text
          tooltip="Send message"
          tooltipOptions={{
            position: "bottom",
          }}
        />
        {/* <Button
            icon="pi pi-send"
            rounded
            outlined
            onClick={() => setVisible(false)}
          /> */}
      </div>
    </div>
  );
  return (
    <div style={{ height: "100%" }}>
      <div>
        <div
          className="homeroom_img"
          style={{
            height: "45vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Zoom duration={"1200"}>
            <img
              id="chat_img"
              src="/../images/chat.jpg"
              style={{ height: "45vh", padding: "10px" }}
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
          <Tooltip
            target=".p-dialog-titlebar-close"
            tooltip="Enter your username"
            tooltipOptions={{ position: "top" }}
          />
          <Dialog
            header={header}
            visible={visible}
            style={{ width: "60vw" }}
            onHide={() => setVisible(false)}
            footer={footerContent}
            breakpoints={{ "960px": "85vw", "641px": "90vw" }}
          >
            {connected ? (
              <div
                className="gif_img"
                style={{
                  height: "45%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  id="home_img"
                  src="/../images/loading_animation.gif"
                  height={300}
                />
                <h3 className="text-center">Loading .....</h3>
              </div>
            ) : (
              <div className="">
                <ScrollPanel
                  id="messageContainer"
                  style={{ width: "100%", height: "150px", padding: "20px" }}
                  className="custombar1 p-4 pt-0 mb-3"
                ></ScrollPanel>
              </div>
            )}
          </Dialog>
          <Button
            tooltip="Join Chat room"
            tooltipOptions={{ position: "top" }}
            label="Create Room"
            onClick={() => {
              setVisible(true);
            }}
            icon="pi pi-bolt"
            className="m-3 font-bold px-5 py-3 p-button-raised p-button-rounded   "
          />
        </div>

        {/* <h2 className="text-center pt-3 pb-3">or</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button label="Join a room" size="lg" text />
        </div> */}
      </div>
    </div>
  );
};

export default Chat;
