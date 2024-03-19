import Footer from "../components/Footer";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Grid sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Grid sx={{ flexGrow: 1 }}>
          <Outlet />
        </Grid>
        <Footer />
      </Grid>
    </>
  );
}

export default Layout;
