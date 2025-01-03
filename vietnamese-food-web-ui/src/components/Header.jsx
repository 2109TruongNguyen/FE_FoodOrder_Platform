import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Badge, Button } from "@mui/material";
import { FONT_MAIN, PRIMARY_COLOR, PROFILE_PAGE } from "../config/Constant";
import { users } from "../test/Datatest";
const settings = ["Quản lý tài khoản", "Món ăn đã mua", "Đăng Xuất"];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));
export default function Header() {
  const [search, setSearch] = React.useState("Nhập tên món ăn cần tìm");
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(users[2]);
  }, []);

  const handleNavigation = (type) => {
    switch (type) {
      case "homepage":
        navigate("/");
        break;
      default:
        console.error("Unknown navigation type");
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleEventUser = (e) => {
    if (e === "Đăng Xuất") {
      // localStorage.removeItem(USER_ID_KEY);
      // navigate(LOGIN_PAGE);
      //   logoutUser();
      setUser(null);
      return;
    }
    if (e === "Vé Đã Mua") {
      //   navigate(BOUGHT_TICKET_MANEMENT_PAGE);
      return;
    }
    if (e === "Quản lý tài khoản") navigate(PROFILE_PAGE);
    return;
  };
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchKeyDown = (eventName) => {
    if (eventName.key === "Enter") {
      //   navigate(SEARCH_PAGE, { state: { eventName: eventName.target.value } })
    }
  };

  return (
    <AppBar style={{ backgroundColor: PRIMARY_COLOR }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <LocalActivityIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img
            onClick={() => handleNavigation("homepage")}
            src="..\..\src\assets\logo\logo.png"
            style={{ maxHeight: "40px", cursor: "pointer" }}
          />
          <Typography
            variant="h6"
            onClick={() => handleNavigation("homepage")}
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: FONT_MAIN,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginLeft: "1%",
              cursor: "pointer",
            }}
            // onClick={handleHomepage}
          >
            VietNamese Food
          </Typography>

          <Typography
            onClick={() => handleNavigation("homepage")}
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: FONT_MAIN,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            VietNamese Food
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Search sx={{ width: { xs: "80%", md: "50%" } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                style={{
                  backgroundColor: "rgba(213, 213, 213, 0)",
                  color: "white",
                }}
                name="search_field"
                placeholder={search}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchInput}
                onKeyDown={handleSearchKeyDown}
              />
            </Search>
          </Box>

          {!user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Button href="/login" sx={{ color: "white" }}>
                Đăng nhập/Đăng ký
              </Button>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip className="d-flex align-items-md-center">
                <span>
                  <div className="mx-3" style={{ fontSize: "110%" }}>
                    <strong>{user.name}</strong>
                  </div>
                  <div
                    className="mx-3"
                    style={{ fontSize: "90%", fontWeight: 500 }}
                  >
                    {/* <i className="flag flag-vietnam"></i> {formatToVND(user.balance)} */}
                  </div>
                </span>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      !user || !user.avatar
                        ? "/src/assets/logo/broken-image.jpg"
                        : "data:image/png;base64, " + user.avatar
                    }
                  />
                </IconButton>

                {/* {
                    havingNotification ?
                      <Badge className="ms-3" badgeContent={"!"} color="warning">
                        <NotificationsActiveIcon style={{ cursor: 'pointer' }} onClick={ () => navigate(NOTIFICATION_PAGE)} />
                      </Badge>
                      :
                      <div className="ms-3">
                        <NotificationsActiveIcon style={{ cursor: 'pointer' }} onClick={ () => navigate(NOTIFICATION_PAGE)} />
                      </div>
                  } */}
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleEventUser(setting);
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {setting == settings[0] && <AccountCircleIcon />}
                      {setting == settings[1] && <LocalActivityIcon />}
                      {setting == settings[2] && <LogoutIcon />}
                      &nbsp;&nbsp;
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
