import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  BeakerIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";

function Sidebar() {

  const id = window.location.pathname

  React.useEffect(() => {
    console.log(id)
  }, [id])

  const items = [
    {
      name: 'MVP',
      icon: <PresentationChartLineIcon className="h-5 w-5 mr-5" />,
      link: '/mvp'
    },
    {
      name: 'Simulation',
      icon: <BeakerIcon className="h-5 w-5 mr-5" />,
      link: '/sim'
    }
  ]


  return (
    <Card className="col-span-1 h-[100%] border-r-[1.5px] p-4 shadow-xl shadow-blue-gray-900/5 bg-black rounded-r-2xl">
      <div className="mb-2 p-4 text-white">
        <Typography variant="h5" color="blue-gray">
          Dashboard
        </Typography>
      </div>
      <List className="flex flex-col">
       {items.map(item => <a href={item.link}>
          <ListItem
            className={`px-5 py-3 rounded-[5px] text-xl ${id == item.link && 'bg-blue-600'} text-white focus:bg-blue-600`}
          >
            <ListItemPrefix>
              {item.icon}
            </ListItemPrefix>
            {item.name}
          </ListItem>
        </a>
        )}
      </List>
    </Card>
  );
}

export default Sidebar;
