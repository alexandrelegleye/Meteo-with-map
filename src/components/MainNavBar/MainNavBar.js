import React from "react"
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react"

function MainNavBar(){

  return (
    <Segment>
      <Menu>
        <Menu.Item
          as={NavLink}
          to="/" 
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
    </Segment>
  );
}

export default MainNavBar;
