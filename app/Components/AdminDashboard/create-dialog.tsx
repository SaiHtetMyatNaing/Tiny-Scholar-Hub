'use client'
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogTitle } from "@mui/material";
import CreateForm from "../Form/create-form";
import { DangerousOutlined } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--primary-gold)",
          color: "black",
          boxShadow : 'none',
          ":hover": {
            backgroundColor: "var(--primary-gold-foreground)",
          },
        }}
        onClick={handleClickOpen}
      >
        Create
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="max-w-4xl">
          <DialogTitle
            height={60}
            className="flex justify-end w-full cursor-pointer"
          >
            <DangerousOutlined
              onClick={handleClose}
              className="-mr-5 cursor-pointer hover:text-gray-500"
            />
          </DialogTitle>
          <CreateForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
