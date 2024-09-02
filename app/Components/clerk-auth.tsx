import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const ClerkAuth = () => {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: "35px",
                height: "35px",
                borderColor: "#f5c13d",
              },
              username: {
                fontSize: "14px",
              },
            },
          }}
        />
      </SignedIn>
    </>
  );
};

export default ClerkAuth;
