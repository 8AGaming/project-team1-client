import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FieldValues, useForm } from "react-hook-form";
import { Copyright } from "../../../layout/Copyright";
import EmailInputIn from "./EmailInputIn";
import PasswordInputIn from "./PasswordInputIn";
import { emailValidet, passwordValidet } from "../../helpers/validation";
import HeaderSignIn from "./HeaderSignIn";
import FooterSignIn from "./FooterSignIn";
import SignInLink from "./SignInLink";
import Grid from "@mui/material/Grid";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (event: FieldValues) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HeaderSignIn />
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <EmailInputIn
              register={register}
              emailValidet={emailValidet}
              errors={errors}
            />
            <PasswordInputIn
              register={register}
              passwordValidet={passwordValidet}
              errors={errors}
            />
          </Grid>
          <FooterSignIn isValid={isValid} />
          <SignInLink text="signUp" />
          {/* <SignUp /> */}
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};
