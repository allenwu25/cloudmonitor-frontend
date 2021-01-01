import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CButton,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import { useHistory } from "react-router-dom";

// sidebar nav config
import navigation from "./_nav";

import { handleLogout } from "../utils/auth";

const TheSidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  function logout() {
    handleLogout();
    history.push("/login");
  }

  return (
    <CSidebar
      colorScheme="dark"
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img
          alt=""
          src={require("../assets/images/cloudmonitorlogo.png")}
          width="100%"
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />

        <CButton
          onClick={logout}
          style={{ marginTop: "20px", textAlign: "left", color: "white" }}
        >
          <CIcon name="cil-user"></CIcon> Sign Out
        </CButton>
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
