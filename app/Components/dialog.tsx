import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogTitle, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

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
      <Typography onClick={handleClickOpen} className="cursor-pointer select-none">
        {title}
      </Typography>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth  // Make the dialog take up the full width on smaller screens
        maxWidth="md" // Set a maximum width for larger screens
        PaperProps={{
          sx: {
            // Responsive styles using media queries
            maxWidth: {
              xs: "95%", // ~95% width on mobile
              sm: "80%", // ~80% width on tablets
              md: "60%", // ~60% width on desktops
            },
            maxHeight: "80vh", // Prevent the dialog from becoming too tall
            overflowY: "auto", // Add scrollbar if content overflows
          },
        }}
      >
        <DialogContent>
          <DialogTitle sx={{ 
            m: 0,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
           }}>
            <Typography variant="h6">{title}</Typography>
            <IconButton aria-label="close" onClick={handleClose}>
              <Close />
            </IconButton>
          </DialogTitle>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}