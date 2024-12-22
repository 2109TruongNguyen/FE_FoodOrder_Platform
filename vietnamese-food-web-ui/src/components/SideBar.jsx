import { Avatar, Divider, List, ListItemButton, ListItemIcon } from "@mui/material";
import React, { useState } from "react";
import { users } from "../test/Datatest";
import { useNavigate } from "react-router-dom";
import { PRIMARY_COLOR, PROFILE_PAGE, SidebarOption } from "../config/Constant";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryIcon from '@mui/icons-material/History';
export default function SideBar({sideBarOption, user}) {
  const navigator = useNavigate();

  SideBar.propTypes = {
    sideBarOption: PropTypes.oneOf(['PROFILE','ORDER','HISTORY']).isRequired,
  }

  const [havingNotification, setHavingNotification] = useState(false);

  useEffect(() => {
    if (user) {
        // const fetchData = async () => {
        //     const response = await api.get(API.Notiication.HAVE_NOTIFICATION + user.id)
        //     if (response.data.httpStatus === HttpStatus.OK) {
        //         // console.log(response.data);
        //         setHavingNotification(response.data.object)
        //     }
        // }
        // fetchData().catch(console.error)
    }
}, [user])
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <div className="d-flex justify-content-center mb-3">
          <Avatar
            src={
              !user || !user.avatar
                ? "/broken-image.jpg"
                : "data:image/png;base64, " + user.avatar
            }
            sx={{ width: 72, height: 72 }}
          />
        </div>
        {
          // eslint-disable-next-line react/prop-types
          user ? <h5 className="text-center mb-3">{user.name}</h5> : ""
        }
        <div className="mb-3">
          <Divider />
        </div>
        <div className="mb-3">
          <ListItemButton
            sx={
              sideBarOption === SidebarOption.PROFILE
                ? { backgroundColor: PRIMARY_COLOR }
                : {}
            }
            onClick={() => {
              navigator(PROFILE_PAGE);
            }}
          >
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <div> Quản lý tài khoản</div>
          </ListItemButton>

          <ListItemButton
            sx={
              sideBarOption === SidebarOption.ORDER
                ? { backgroundColor: PRIMARY_COLOR }
                : {}
            }
            onClick={() => {
            //   navigator(PROFILE_PAGE);
            }}
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <div> Quản lý đơn hàng</div>
          </ListItemButton>

          <ListItemButton
            sx={
              sideBarOption === SidebarOption.HISTORY
                ? { backgroundColor: PRIMARY_COLOR }
                : {}
            }
            onClick={() => {
            //   navigator(PROFILE_PAGE);
            }}
          >
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <div> Lịch sử đơn hàng</div>
          </ListItemButton>

        </div>
      </List>
    </>
  );
}
