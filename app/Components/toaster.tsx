"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Toaster({
  description,
  trigger,
  status,
}: {
  description: string;
  trigger: boolean;
  status: "error" | "success" | "info" | "warning";
}) {
  const [open, setOpen] = React.useState(trigger);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={status}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {description}
      </Alert>
    </Snackbar>
  );
}
