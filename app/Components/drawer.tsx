import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DrawRounded } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSideBarStore } from "../store/useSideBarStore";

export default function LeftDrawer() {
  const [open, setOpen] = React.useState(false);
  const toggleWhiteBoard = useSideBarStore((state)=> state.toggleWhiteBoard)
  const router = useRouter();
  const items = [
    {
      id: 1,
      title: "Whiteboard",
      handleClick: toggleWhiteBoard,
      icon: <DrawRounded />,
    },
  ];

  const pages = [
    { id: 1, title: "Home", path: "/", icon: <DrawRounded /> },
    { id: 2, title: "Workbook", path: "/workbook", icon: <DrawRounded /> },
    { id: 3, title: "Flashcards", path: "/flashcards", icon: <DrawRounded /> },
    {
      id: 3,
      title: "Lesson Plan",
      path: "/lesson-plan",
      icon: <DrawRounded />,
    },
    {
      id: 4,
      title: "Admin Dashboard",
      path: "/admin-dashboard",
      icon: <DrawRounded />,
    },
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((page, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(page.path);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.id} className="flex items-center" disablePadding>
            <ListItemButton onClick={item.handleClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="flex">
      <Image 
        width={200}
        height={200}
        src="/Logo.png"
        className="w-10"
        alt="Logo"
        onClick={toggleDrawer(true)}
      />
      <Drawer className="mt-10" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
