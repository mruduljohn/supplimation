import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  BeakerIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const isItemSelected = (itemName) => {
    return selectedItem === itemName;
  };

  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-black rounded-r-2xl">
      <div className="mb-2 p-4 text-white">
        <Typography variant="h5" color="blue-gray">
          Dashboard
        </Typography>
      </div>
      <List>
        <ListItem
          className={`text-xl text-white ${
            isItemSelected("Simulation") ? "bg-blue-600" : ""
          }`}
          onClick={() => handleItemClick("Simulation")}
        >
          <ListItemPrefix>
            <BeakerIcon className="h-5 w-5 mr-5" />
          </ListItemPrefix>
          <a href="/sim">Simulation</a>
        </ListItem>
        <ListItem
          className={`text-xl text-white mt-5 ${
            isItemSelected("MVP") ? "bg-blue-600" : ""
          }`}
          onClick={() => handleItemClick("MVP")}
        >
          <ListItemPrefix>
            <PresentationChartLineIcon className="h-5 w-5 mr-5" />
          </ListItemPrefix>
          <a href="/mvp">MVP</a>
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;
