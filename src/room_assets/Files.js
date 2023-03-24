import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { Tooltip } from "primereact/tooltip";
import React, { useEffect, useRef, useState } from "react";
import { SplitButton } from "primereact/splitbutton";
import { Zoom } from "react-reveal";
import { Link, useNavigate, useParams } from "react-router-dom";
import Search from "../components/assets/Search";
import Splliter from "../components/assets/Splliter";
import { TieredMenu } from "primereact/tieredmenu";
import { SpeedDial } from "primereact/speeddial";

const Files = () => {
  const menu = useRef(null);
  const [arr, setarr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let params = useParams();
  const [paginator, setpaginator] = useState(0);
  const onPageChange = (event) => {
    setpaginator(event.first);
  };

  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-times",
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://reactjs.org/";
      },
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {
        //router.push('/fileupload');
      },
    },
  ];

  const [Folder, setFolder] = useState([]);
  const navigate = useNavigate();

  const get_folders = async (val) => {
    console.log(val);
    let res = await fetch(
      "https://docchat-backend.onrender.com/api/file/getFiles",
      {
        method: "POST",
        body: JSON.stringify({
          path: val,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    let data = await res.json();
    console.log(data);
    if (res.status == 200) {
      setFolder(data["folder"].files);
      console.log(Folder);
      console.log("Sucuss");
      // alert("Sucussfully Fetched");
    } else {
      console.log("errorr");
    }
  };

  const [visible, setVisible] = useState(false);
  const header = <h2 className="text-center">File splliter</h2>;
  return (
    <div style={{ width: "100%" }}>
      <div class="grid grid-nogutter">
        <div className="col-12 flex justify-content-center align-items-center ">
          <h3 className="text-center mr-2">
            Path : {"  "}/{params["id"]}/{params["*"]}{" "}
          </h3>
          <Button
            text
            icon="pi pi-copy"
            rounded
            size="lg"
            onClick={() => {
              const val = params["id"] + "/" + params["*"];
              navigator.clipboard.writeText(val);
            }}
          />
          <div className="">
            <Button
              className="custom-tooltip-btn ml-3"
              tooltipOptions={{ position: "top" }}
              icon="pi pi-folder"
              size="lg"
              rounded
              text
              severity="info"
              aria-label="User"
            />
          </div>
          <Tooltip
            target=".custom-tooltip-btn"
            position="bottom"
            autoHide={false}
            event="focus"
          >
            <div className="flex justify-content-center align-items-center p-1 md:pd-3">
              <div className="px-3">
                <InputText
                  style={{ borderRadius: "30px" }}
                  placeholder="Enter name ..."
                />
              </div>
              <div>
                <Button
                  size="lg"
                  icon="pi pi-plus"
                  rounded
                  outlined
                  severity="info"
                  aria-label="User"
                  onClick={() => {
                    setarr([...arr, 1]);
                  }}
                />
              </div>
            </div>
          </Tooltip>
        </div>

        <div className="col-12 md:col-12 grid grid-nogutter px-4">
          <div
            className="col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div className="flex-1">
              <Button
                className="ml-4 mr-3"
                size="lg"
                icon="pi pi-arrow-left"
                rounded
                text
                severity="info"
                aria-label="User"
                onClick={() => navigate(-1)}
              />
            </div>
            <Search />
            <div className="flex-1">
              <Button
                className="ml-4"
                size="lg"
                text
                icon="pi pi-refresh"
                rounded
                severity="info"
                aria-label="User"
              />
            </div>
            <div className="flex">
              <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
              <Button
                text
                icon="pi pi-ellipsis-v"
                rounded
                size="lg"
                onClick={(e) => menu.current.toggle(e)}
              />
              {/* <SpeedDial model={items} direction="down" /> */}
            </div>
          </div>
          <div class="col-4 flex flex-column justify-content-center align-items-center p-2 ">
            <Zoom duration={1100} delay={600}>
              <img src="/../images/folder.jpg" height={100} id="temp_img" />
            </Zoom>
            <h3>{paginator}</h3>
          </div>
          {paginator + 1 < arr.length && (
            <div class="col-4 flex flex-column justify-content-center align-items-center p-2 ">
              <Zoom duration={1100} delay={600}>
                <img src="/../images/folder.jpg" height={100} id="temp_img" />
              </Zoom>
              <h3>{paginator + 1}</h3>
            </div>
          )}
          {paginator + 2 < arr.length && (
            <div class="col-4 flex flex-column justify-content-center align-items-center p-2 ">
              <Zoom duration={1100} delay={600}>
                <img src="/../images/folder.jpg" height={100} id="temp_img" />
              </Zoom>
              <h3>{paginator + 2}</h3>
            </div>
          )}
          {paginator + 3 < arr.length && (
            <>
              <div class="col-4  flex flex-column justify-content-center align-items-center p-2 ">
                <Zoom duration={1100} delay={600}>
                  <img src="/../images/folder.jpg" height={100} id="temp_img" />
                </Zoom>
                <h3>{paginator + 3}</h3>
              </div>
            </>
          )}
          {paginator + 4 < arr.length && (
            <div class="col-4 flex flex-column justify-content-center align-items-center p-2 ">
              <Zoom duration={1100} delay={600}>
                <Link to={"yeah hoo....."}>
                  <img src="/../images/folder.jpg" height={100} id="temp_img" />
                </Link>
              </Zoom>
              <h3>{paginator + 4}</h3>
            </div>
          )}
          {paginator + 5 < arr.length && (
            <div class="col-4 flex flex-column justify-content-center align-items-center p-2 ">
              <Zoom duration={1100} delay={600}>
                <Link to={"dfh"}>
                  <img
                    src="/../images/folder.jpg"
                    height={100}
                    id="temp_img"
                    onClick={() => {
                      get_folders("./New Folder");
                    }}
                  />
                </Link>
              </Zoom>
              <h3>{paginator + 5}</h3>
            </div>
          )}
          {/* {Folder &&
            Folder.map((file) => (
              <>
                <div class="col-4 flex justify-content-center align-items-center p-2 ">
                  <Zoom duration={1100} delay={600}>
                    <img src="/../images/file.jpg" height={100} id="temp_img" />
                    <h5>{file.name}</h5>
                  </Zoom>
                </div>
              </>
            ))} */}
          <div
            className="col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // padding: "30px",
            }}
          >
            <div className="card">
              <Paginator
                first={paginator}
                rows={6}
                totalRecords={arr.length}
                onPageChange={onPageChange}
                template={{
                  layout: "PrevPageLink CurrentPageReport NextPageLink",
                }}
              />
            </div>
          </div>
        </div>
        {/* <div
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
        </div> */}
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
