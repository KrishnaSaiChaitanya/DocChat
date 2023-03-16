import { Button } from "primereact/button";
import React, { useState } from "react";

import { Checkbox } from "primereact/checkbox";
import { SelectButton } from "primereact/selectbutton";
import { InputText } from "primereact/inputtext";
import { Zoom } from "react-reveal";

const CreateRoom = () => {
  const options = ["Public", "private"];
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(options[0]);
  const [isloading, setisloading] = useState(false);
  return (
    <div style={{ height: "100%" }}>
      {isloading && (
        <div style={{ height: "100%" }}>
          <div
            style={{
              display: "flex",
              paddingTop: "150px",
              justifyContent: "center",
            }}
          >
            <img
              id="chat_img"
              src="../images/loading_animation.gif"
              height={450}
            />
          </div>
          <h3 className="text-center p-2">Creating Room .....</h3>
        </div>
      )}
      {!isloading && (
        <div
          className="flex align-items-center justify-content-center"
          style={{ height: "100%" }}
        >
          <div className=" p-4  border-round w-full lg:w-6">
            <div className="text-center mb-5">
              <Zoom duration={"1200"}>
                <img
                  src="../images/logo.png"
                  alt="hyper"
                  height={80}
                  className="mb-3"
                />
              </Zoom>

              <h1 className="p-4">Create Room</h1>
              <span className="text-600 font-medium line-height-3">
                Don't know how to use?
              </span>
              <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
                Check here!
              </a>
            </div>
            <Zoom duration={"1200"} delay={600}>
              <div>
                <label
                  htmlFor="text"
                  className="block text-900 font-medium mb-2"
                >
                  Email
                </label>
                <InputText
                  id="email"
                  type="text"
                  placeholder="Email address"
                  className="w-full mb-3"
                />

                <label
                  htmlFor="password"
                  className="block text-900 font-medium mb-2"
                >
                  Name
                </label>
                <InputText
                  id="password"
                  placeholder="Enter Name of your room"
                  className="w-full mb-3"
                />
                <div className="p-3 flex justify-content-center">
                  <SelectButton
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    options={options}
                  />
                </div>

                <div className="flex align-items-center justify-content-between mb-6">
                  <div className="flex align-items-center">
                    <Checkbox
                      id="rememberme"
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="mr-2"
                    />
                    <label htmlFor="rememberme">
                      Accept terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="flex  justify-content-center">
                  <Button
                    label="Create Room"
                    icon="pi pi-bolt"
                    rounded
                    className="w-full"
                    onClick={() => {
                      setisloading(true);
                    }}
                  />
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateRoom;
