import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Dialog } from "primereact/dialog";

export default function Search() {
  const [Visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const items = Array.from({ length: 100000 }).map((_, i) => ({
    label: `Item #${i}`,
    value: i,
  }));

  const searchItems = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
    let query = event.query;
    let _filteredItems = [];

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        _filteredItems.push(item);
      }
    }

    setFilteredItems(_filteredItems);
  };
  const header = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AutoComplete
        value={selectedItem}
        suggestions={filteredItems}
        completeMethod={searchItems}
        virtualScrollerOptions={{ itemSize: 38 }}
        field="label"
        dropdown
        onChange={(e) => setSelectedItem(e.value)}
        onFocus={() => setVisible(true)}
      />
    </div>
  );

  return (
    <>
      <AutoComplete
        value={selectedItem}
        suggestions={filteredItems}
        completeMethod={searchItems}
        virtualScrollerOptions={{ itemSize: 38 }}
        field="label"
        dropdown
        onChange={(e) => setSelectedItem(e.value)}
        onFocus={() => setVisible(true)}
      />
      <Dialog
        header={header}
        visible={Visible}
        style={{ width: "60vw" }}
        onHide={() => setVisible(false)}
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
    </>
  );
}
