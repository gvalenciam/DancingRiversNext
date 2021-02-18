import React from "react";
import cn from "classnames";
import Image from "next/image";

import Utils from "../../styles/utils.module.scss";
import styles from "../../styles/components/general/FooterDr.module.scss";

import * as UrlUtils from "../../utils/urls";
import * as Constants from "../../constants/Constants";

export default function FooterDR() {
  return (
    <div className={cn(Utils.paddingGeneral, Utils.flexColumnCenterAuto)}>
      <div
        className={cn(
          Utils.flexBetweenStart,
          styles.contenedorInformacionFooter
        )}
      >
        <div className={cn(Utils.flexColumnStartStart)}>
          <h3 className={styles.tituloFooter}>Contacto</h3>
          <p className={styles.textoFooter}>Jr. Medrano Silva 165 Barranco</p>
          <p className={styles.textoFooter}>(01) 2305020 Anexo 4295</p>
          <p className={styles.textoFooter}>www.cita.edu.pe</p>
          <p className={styles.textoFooter}>cita@utec.edu.pe</p>
        </div>
        <div className={cn(Utils.flexColumnStartStart)}>
          <h3 className={styles.tituloFooter}>Síguenos</h3>
          <div
            className={cn(
              styles.contenedorIconosRedes,
              Utils.flexBetweenCenter
            )}
          >
            <div
              className={styles.iconoRedesFooter}
              onClick={() => {
                UrlUtils.openURLInTab(Constants.URL_FACEBOOK_CITA);
              }}
            >
              <Image
                src="/images/Inicio/footer_icono_facebook.svg"
                width={35.5}
                height={35.5}
                layout="responsive"
                objectFit="contain"
              ></Image>
            </div>
            <div
              className={styles.iconoRedesFooter}
              onClick={() => {
                UrlUtils.openURLInTab(Constants.URL_TWITTER_CITA);
              }}
            >
              <Image
                src="/images/Inicio/footer_icono_twitter.svg"
                width={43.8}
                height={35.5}
                layout="responsive"
                objectFit="contain"
              ></Image>
            </div>
            <div
              className={styles.iconoRedesFooter}
              onClick={() => {
                UrlUtils.openURLInTab(Constants.URL_YOUTUBE_CITA);
              }}
            >
              <Image
                src="/images/Inicio/footer_icono_youtube.svg"
                width={52.5}
                height={36.8}
                layout="responsive"
                objectFit="contain"
              ></Image>
            </div>
            <div
              className={styles.iconoRedesFooter}
              onClick={() => {
                UrlUtils.openURLInTab(Constants.URL_INSTAGRAM_CITA);
              }}
            >
              <Image
                src="/images/Inicio/footer_icono_instagram.svg"
                width={36.3}
                height={36.3}
                layout="responsive"
                objectFit="contain"
              ></Image>
            </div>
          </div>
        </div>
        <div className={cn(Utils.flexColumnStartStart)}>
          <div className={styles.contenedorLogoDR}>
            <Image
              src="/images/Logos/Logo_DR_negro.png"
              width={1887}
              height={446}
              layout="responsive"
              objectFit="contain"
            ></Image>
          </div>
          <p className={styles.textoFooter}>
            Centro de Investigación y Tecnología del Agua
          </p>
          <p className={styles.textoFooter}>Jr. Medrano Silva 165 Barranco</p>
          <div className={styles.contenedorBotonesIdioma}></div>
        </div>
      </div>
      <div className={cn(styles.contenedorCopyright)}>
        <hr className={styles.divisorFooter}></hr>
        <p className={styles.textoFooter}>
          Copyright &copy; 2019 Centro de Investigación y Tecnología del Agua -
          UTEC. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
