import { Button } from "primereact/button";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { Tooltip } from "primereact/tooltip";

const Chat = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const header = <h2 className="text-center">Chat Room ...</h2>;
  const footerContent = (
    <div className="grid">
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
      <div style={{ padding: "10px" }}>
        <div
          className="homeroom_img"
          style={{
            height: "45vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="../images/share.png"
            style={{ height: "45vh", padding: "10px" }}
          />
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
          >
            <div
              className="homeroom_img"
              style={{
                height: "45vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="../images/loading_animation.gif"
                style={{ height: "50vh", padding: "10px" }}
              />
              <h3 className="text-center">Loading .....</h3>
            </div>
          </Dialog>
          <Button
            tooltip="Enter your username"
            tooltipOptions={{ position: "top" }}
            label="Create Room"
            onClick={() => setVisible(true)}
            icon="pi pi-bolt"
            className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap ml-8 m-4 "
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
