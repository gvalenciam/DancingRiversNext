import React from "react";
import Image from "next/image";
import cn from "classnames";

import quoteStyles from "../../styles/components/general/Quote.module.scss";
import utilStyles from "../../styles/utils.module.scss";

function Quote(props) {
  return (
    <div
      className={cn(
        quoteStyles.contenedorQuote,
        utilStyles.flexColumnAutoEnd,
        utilStyles.relativeContainer
      )}
    >
      <div className={quoteStyles.contenedorImagenFondo}>
        <Image
          src={props.imgSrc}
          height={props.height}
          width={props.width}
          layout="responsive"
          objectFit="contain"
        ></Image>
      </div>
      <div
        className={cn(
          quoteStyles.contenedorContenido,
          utilStyles.flexColumnAutoEnd
        )}
      >
        <p className={cn(quoteStyles.quote, utilStyles.textoColorPrincipal)}>
          {props.quote}
        </p>
        <div className={quoteStyles.divisor}></div>
        <p className={cn(quoteStyles.autor, utilStyles.textoColorPrincipal)}>
          {props.autor}
        </p>
        <p
          className={cn(quoteStyles.cargoAutor, utilStyles.textoColorPrincipal)}
        >
          {props.cargoAutor}
        </p>
      </div>
    </div>
  );
}

export default Quote;
