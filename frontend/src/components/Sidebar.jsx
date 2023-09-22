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
import { Link } from "react-router-dom";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const isItemSelected = (itemName) => {
    return selectedItem === itemName;
  };

  return (
    <Card className="col-span-1 h-[100%] border-r-[1.5px] p-4 shadow-xl shadow-blue-gray-900/5 bg-black rounded-r-2xl">
      <div className="mb-2 p-4 text-white">
        <Typography variant="h5" color="blue-gray">
          Dashboard
        </Typography>
      </div>
      <List className="flex flex-col">
        <a href="/sim">
          <ListItem
            className='px-5 py-3 rounded-[5px] text-xl text-white focus:bg-blue-600'
          >
            <ListItemPrefix>
              <BeakerIcon className="h-5 w-5 mr-5" />
            </ListItemPrefix>
            Simulation
          </ListItem>
        </a>
        <a href="/mvp">
          <ListItem
            className='px-5 py-3 rounded-[5px] text-xl text-white mt-5 focus:bg-blue-600'
          >
            <ListItemPrefix>
              <PresentationChartLineIcon className="h-5 w-5 mr-5" />
            </ListItemPrefix>
            MVP
          </ListItem>
        </a>
      </List>
    </Card>
  );
}

export default Sidebar;
