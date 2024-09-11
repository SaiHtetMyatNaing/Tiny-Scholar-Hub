import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogTitle, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditDialogSlide({
  children,
  dialogTitle,
  triggerButtonClassName,
  dialogClassName,
  ...rest
}: {
  children: React.ReactNode;
  dialogTitle: string;
  triggerButtonClassName?: string;
  dialogClassName?: string;
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
      <Button
        aria-label={`Open ${dialogTitle} dialog`}
        sx={{
          backgroundColor: "var(--primary-gold)",
          border: 1,
          borderColor: "var(--primary-gold)",
          color: "black",
          boxShadow: "none",
          ":hover": {
            backgroundColor: "var(--primary-gold-foreground)",
            borderColor: "var(--primary-gold)",
          },
          textTransform: "none", // Prevent uppercase transformation
        }}
        onClick={handleClickOpen}
        className={triggerButtonClassName}
      >
        {dialogTitle}
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby={`${dialogTitle}-dialog`}
        className={dialogClassName}
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: {
            maxWidth: {
              xs: "90%",
              sm: "80%",
              md: "60%",
            },
            borderRadius: "8px",  // Add rounded corners
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add subtle shadow
            padding: "24px",     // Add padding for better content spacing
            overflow: 'scroll',
          },
        }}
        {...rest}
      >
        <DialogTitle
          sx={{
            m: 0,                   // Remove default margin
            p: 2,                   // Add padding for better visual balance
            display: "flex",
            justifyContent: "space-between", // Align title and close button
            alignItems: "center",    
          }}
        >
          <div id={`${dialogTitle}-dialog`}>{dialogTitle}</div> {/* Title */}
          <IconButton 
            aria-label="close" 
            onClick={handleClose}
            sx={{
              color: "text.secondary", // Use theme color for better consistency
              ":hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)", // Subtle hover effect
              },
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        {children}
      </Dialog>
    </>
  );
}