import React from "react"
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react"

function MainNavBar(){

  return (
    <Menu>
      <Menu.Item
        as={NavLink} // on demande au Menu.Item d'utiliser NavLink pour faire son render
        // comme ca on utilise le fonction de react-router-dom pour changer de page
        to="/" // ici la props to, est passé à NavLink
        end
        name="map"
      >
          Map
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        to="/weather"
        end
        name="forecast"
      >
          Forecast
      </Menu.Item>

    </Menu>

  );
}

export default MainNavBar;
