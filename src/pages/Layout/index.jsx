import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../components/Button";
import "./styles.css"


export default function Layout(props) {
  //const [usuario, setUsuario] = useState("");
  const { usuario, setUsuario } = props;
  const isMobile = useMediaQuery("(max-width:600px)");

  const navigate = useNavigate();

  async function logout() {
    setUsuario("");
    navigate("/");
  }

  const telaLogado = (
    <div
      style={{
        height: "100%",
      }}
    >
      <nav className="navLayout"
      >
        <h1
          style={{
            color: "white",
            fontSize: "42px",
            margin: "auto 0 auto 14px",
          }}
        >
          MobileFirstAT
        </h1>
        {isMobile ? (
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  Navegação
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem >
                    <Link to={"/"} onClick={popupState.close} className="MenuItemStyle">
                      Início
                    </Link>
                  </MenuItem>
                  <MenuItem >
                    <Link to={"/form"} onClick={popupState.close} className="MenuItemStyle">
                      Form
                    </Link>
                  </MenuItem>
                  <MenuItem >
                    <Link to={"/lista"}  onClick={popupState.close} className="MenuItemStyle">
                      Lista
                    </Link>
                  </MenuItem>
                  <MenuItem >
                    <p 
                      style={{ textDecoration: "underline" }}
                      className="MenuItemStyle"
                      onClick={logout}
                    >
                      LOGOUT
                    </p>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        ) : (
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              listStyle: "none",
              backgroundColor: "#303030",
              textDecoration: "none",
            }}
          >
            <li>
              <Link to={"/"} className="liStyle">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/form"} className="liStyle">
                Form
              </Link>
            </li>
            <li>
              <Link to={"/lista"} className="liStyle">
                Lista
              </Link>
            </li>
            <li>
              <p
                style={{ textDecoration: "underline" }}
                className="liStyle"
                onClick={logout}
              >
                LOGOUT
              </p>
            </li>
          </ul>
        )}
      </nav>
      <Outlet />
    </div>
  );

  const telaLogin = (
    <div
      style={{
        height: "100%",
      }}
    >
      <nav className="navLayout"
      >
        {!isMobile ?(<h1
          style={{
            color: "white",
            fontSize: "42px",
            margin: "auto 0 auto 14px",
          }}
        >
          MobileFirstAT
        </h1>):(<h1
          style={{
            color: "white",
            fontSize: "35px",
            margin: "auto 0 auto 14px",
          }}
        >
          MobileFirstAT
        </h1>)}
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            backgroundColor: "#303030",
            textDecoration: "none",
          }}
        >
        </ul>
      </nav>
      <Outlet />
    </div>
  );
  return usuario.id ? telaLogado : telaLogin;
}
