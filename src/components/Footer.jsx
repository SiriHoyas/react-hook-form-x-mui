import { Divider, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { FacebookRounded, ForwardToInboxOutlined } from "@mui/icons-material";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Grid container direction={{ xs: "column", md: "row" }} sx={{ backgroundColor: "primary.main", p: "1.5rem" }} item={true}>
      <Grid rowGap={2} container justifyContent={"space-between"} item={true}>
        <Grid className="logoSocials" container rowGap={4} xs={12} md={4} item={true} justifyContent={{ xs: "center", md: "start" }}>
          <Grid container direction={"row"} justifyContent={{ xs: "center", md: "start" }}>
            <IconButton sx={{ pl: "0" }}>
              <FacebookRounded />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container direction={"column"} xs={12} md={4} rowGap={1} item={true} alignItems={{ xs: "center", md: "start" }}>
          <Typography variant="body2">CONTACT US</Typography>
          <Typography variant="body2">hello@site.com</Typography>
          <Typography variant="body2">456 Oak Street, Anytown, CA 98765</Typography>
          <Typography variant="body2">+34 (555) 555-1212</Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={4}
          rowGap={1}
          direction={"column"}
          sx={{ display: "flex" }}
          item={true}
          alignItems={{ xs: "center", md: "start" }}
        >
          <Typography variant="body2">NEWSLETTER</Typography>
          <Typography variant="body2" color={"text.disabled"} align="center">
            Enter your email to get notified about great deals.
          </Typography>
          <TextField
            label="Email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <ForwardToInboxOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            size="small"
          />
        </Grid>
      </Grid>
      <Divider sx={{ mt: "1rem" }} />
      <Typography
        variant="body2"
        color={"text.disabled"}
        sx={{ display: "flex", justifyContent: { md: "end", xs: "center" }, mt: "1rem", mr: "1rem" }}
      ></Typography>
    </Grid>
  );
}

export default Footer;
