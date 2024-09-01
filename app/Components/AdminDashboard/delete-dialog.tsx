'use client'
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteDialog({ id }: { id: number }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          borderColor: "var(--primary-gold)",
          boxShadow: "none",
          ":hover": {
            backgroundColor: "var(--tertiary-gold)",
            borderColor: "var( --primary-gold)",
          },
        }}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`Are you sure to delete this User ID : ${id}`}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "var(--primary-gold)",
              boxShadow: "none",
              ":hover": {
                backgroundColor: "var(--tertiary-gold)",
                borderColor: "var( --primary-gold)",
              },
            }}
          >
            Agree
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              backgroundColor: "var(--primary-gold)",
              color: "black",
              boxShadow: "none",
              border: 1,
              borderColor: "var(--primary-gold)",
              ":hover": {
                backgroundColor: "var(--primary-gold-foreground)",
                boxShadow: "none",
              },
            }}
          >
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
