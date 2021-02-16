import React from "react";
import cs from "classnames";

import navbarStyles from "../../styles/components/general/NavbarDR.module.scss";

export default function NavbarOverlay(props) {
  return (
    <div
      className={cs({
        [navbarStyles.navbarOverlay]: props.show,
        [navbarStyles.navbarOverlayHidden]: !props.show,
      })}
      onMouseLeave={props.onMouseLeave}
    ></div>
  );
}
