import React from "react";

const Files = () => {
  return (
    <div style={{ height: "100%" }}>
      <div
        class="grid"
        style={{
          height: "100%",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div class="col-4 p-3">
          <img src="../images/folder.jpg" height={150} />
        </div>
        <div class="col-4 p-3">
          <img src="../images/folder.jpg" height={150} />
        </div>{" "}
        <div class="col-4 p-3">
          <img src="../images/folder.jpg" height={150} />
        </div>{" "}
        <div class="col-4 p-3">
          <img src="../images/folder.jpg" height={150} />
        </div>{" "}
        <div class="col-4 p-3">
          <img src="../images/folder.jpg" height={150} />
        </div>
      </div>
    </div>
  );
};

export default Files;
