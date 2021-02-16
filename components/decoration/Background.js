import React from "react";
import Image from "next/image";

function Background(props) {
  return (
    <section className={props.className}>
      <Image
        src={props.imageSrc}
        width={props.width}
        height={props.height}
        alt={props.alt}
        objectFit="cover"
        layout="responsive"
      ></Image>
    </section>
  );
}

export default Background;
