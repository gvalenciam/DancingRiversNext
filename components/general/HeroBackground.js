import React from "react";
import Image from "next/image";

import heroStyles from "../../styles/components/general/HeroBackground.module.scss";

class HeroBackground extends React.Component {
  render() {
    return (
      <section className={heroStyles.contenedorImagenBackground}>
        <Image
          src={this.props.imageSrc}
          alt={this.props.alt}
          layout="fill"
        ></Image>
        <div className={heroStyles.contenedorTituloSubtituloBackground}>
          <h1 className={heroStyles.tituloBackground}>
            {this.props.tituloBackground}
          </h1>
          <p className={heroStyles.subtituloBackground}>
            {this.props.subtituloBackground}
          </p>
        </div>
      </section>
    );
  }
}

export default HeroBackground;
