import {
  Box,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box>
      <Divider variant="fullWidth" sx={{ my: 4 }} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" gap={4}>
          <Typography fontSize="14px" color="#707070">
            CONTACT
          </Typography>
          <Typography fontSize="14px" color="#707070">
            TERMS OF SERVICES
          </Typography>
          <Typography fontSize="14px" color="#707070">
            SHIPPING AND RETURNS
          </Typography>
        </Box>
        <Box>
          <TextField
            id="standard-basic"
            label="Give an email, get the newsletter"
            variant="standard"
            sx={{
              width: "300px",
              "& .MuiInputLabel-root": {
                fontSize: "13px",
              },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="start">
                    <TrendingFlatIcon sx={{ cursor: "pointer" }} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography fontSize="12px" color="#707070">
          <Typography fontSize="12px" component="span" color="#000">
            © 2021 Shelly.
          </Typography>{" "}
          Terms of use{" "}
          <Typography fontSize="12px" component="span" color="#000">
            and
          </Typography>{" "}
          privacy policy.
        </Typography>
        <Box color="#707070" display="flex" gap={2}>
          <LinkedInIcon sx={{ cursor: "pointer" }} />
          <FacebookIcon sx={{ cursor: "pointer" }} />
          <InstagramIcon sx={{ cursor: "pointer" }} />
          <TwitterIcon sx={{ cursor: "pointer" }} />
        </Box>
      </Box>
    </Box>
  );
}
