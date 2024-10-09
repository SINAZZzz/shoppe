import { Box, Grid, Divider, IconButton, Typography } from "@mui/material";
import Logo from "../assets/SHOPPE.png";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Home() {
  return (
    <Box>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{ objectFit: "contain" }}
          />
        </Grid>

        <Grid item xs>
          <Grid container alignItems="center" justifyContent="flex-end">
            <Grid item>
              <Grid container spacing={6}>
                <Grid item>
                  <Typography variant="body1" sx={{ cursor: "pointer" }}>
                    Shop
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" sx={{ cursor: "pointer" }}>
                    Blog
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" sx={{ cursor: "pointer" }}>
                    Our Story
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Divider
              orientation="vertical"
              sx={{ bgcolor: "#707070", height: "20px", mx: 4 }}
            />

            <Box display="flex" gap={2}>
              <Grid item>
                <IconButton>
                  <SearchOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <LocalGroceryStoreOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <Person2OutlinedIcon />
                </IconButton>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
