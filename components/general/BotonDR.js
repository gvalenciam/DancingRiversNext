import React from "react";

import styles from "../../styles/components/general/BotonDR.module.scss";

class BotonDR extends React.Component {
  render() {
    return (
      <button
        className={styles.botonDR}
        onClick={this.props.onClick}
        type="button"
      >
        {this.props.titulo}
      </button>
    );
  }
}

export default BotonDR;
