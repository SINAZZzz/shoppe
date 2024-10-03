import { Box, Divider, IconButton, Typography } from "@mui/material";
import Logo from "../assets/SHOPPE.png";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Home() {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{ objectFit: "contain" }}
        />

        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          width="100%"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="15%"
          >
            <Typography variant="body1">Shop</Typography>
            <Typography variant="body1">Blog</Typography>
            <Typography variant="body1">Our Story</Typography>
          </Box>

          <Divider
            orientation="vertical"
            sx={{ bgcolor: "#707070", height: "20px", mx: 4 }}
          />

          <IconButton
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "10%",
            }}
          >
            <SearchOutlinedIcon />
            <LocalGroceryStoreOutlinedIcon />
            <Person2OutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
