import React, { useRef } from "react";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
  const toast = useRef(null);
  const navigate = useNavigate();
  const items = [
    {
      label: "Add",
      icon: "pi pi-pencil",
      command: () => {
        navigate("/signup");
      },
    },
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Update",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => {
        toast.current.show({
          severity: "error",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://facebook.github.io/react/";
      },
    },
  ];

  return (
    <div>
      <Toast ref={toast} />
      <SpeedDial
        model={items}
        radius={120}
        type="quarter-circle"
        direction="down-left"
        showIcon="pi pi-bars"
        hideIcon="pi pi-times"
      />
    </div>
  );
}
