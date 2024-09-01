
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@mui/material";
  
  const ClerkAuth = () => {
    return (
      <>
        <SignedOut>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f5c13d",
              color: "black",
              border : 1,
              borderColor : "hsl(43 90% 60%)" ,
              boxShadow: "none",
              ":hover": { backgroundColor: 'white'  , boxShadow : 'none' },
            }}
          >
            <SignInButton />
          </Button>
        </SignedOut >
  
        <SignedIn>
          <UserButton />
        </SignedIn>
      </>
    );
  };
  
  export default ClerkAuth;
  