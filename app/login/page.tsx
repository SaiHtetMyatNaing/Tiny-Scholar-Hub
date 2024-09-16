"use client";
import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { Container, Stack } from "@mui/material";
import { supabase } from "../utils/supabase-client";

const page = () => {
  return (
    <Container maxWidth="xs" sx={{ marginTop: "10em" }}>
      <Stack spacing={6}>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}    providers={['google' , 'facebook']}/>
      </Stack>
    </Container>
  );
};

export default page;
