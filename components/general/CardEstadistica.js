import React from "react";
import Image from "next/image";
import cn from "classnames";

import utilStyles from "../../styles/utils.module.scss";
import cardStyles from "../../styles/components/general/CardEstadistica.module.scss";

class CardEstadistica extends React.Component {
  render() {
    return (
      <div
        className={cn(
          utilStyles.flexColumnCenterCenter,
          cardStyles.contenedorCard
        )}
      >
        <div className={cardStyles.contenedorIcono}>
          <Image
            src={this.props.imgSrc}
            height={this.props.height}
            width={this.props.width}
            layout="responsive"
            objectFit="contain"
          ></Image>
        </div>
        <p className={cn(cardStyles.tituloCard, utilStyles.textoCentrado)}>
          {this.props.titulo}
        </p>
        <p className={cn(cardStyles.subtituloCard, utilStyles.textoCentrado)}>
          {this.props.subtitulo}
        </p>
      </div>
    );
  }
}

export default CardEstadistica;
