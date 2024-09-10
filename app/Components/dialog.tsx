"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogTitle, Typography } from "@mui/material";

import { DangerousOutlined } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography onClick={handleClickOpen} className="cursor-pointer select-none">{title}</Typography>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="max-w-5xl">
          <DialogTitle
            height={60}
            className="flex justify-end w-full cursor-pointer"
          >
            <DangerousOutlined
              onClick={handleClose}
              className="-mr-5 cursor-pointer hover:text-gray-500"
            />
          </DialogTitle>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}
