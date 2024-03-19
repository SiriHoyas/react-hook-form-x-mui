import { Grid } from "@mui/material";
import SignUpForm from "../components/SignUpForm";

function HomePage() {
  return (
    <Grid container p={"3rem"}>
      <SignUpForm />
    </Grid>
  );
}

export default HomePage;
