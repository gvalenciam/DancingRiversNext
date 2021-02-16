import Head from "next/head";
import Image from "next/image";
import cn from "classnames";
import { useRouter } from "next/router";

import utilStyles from "../styles/utils.module.scss";
import styles from "../styles/pages/Inicio.module.scss";

import * as Constants from "../constants/Constants";
import * as QuoteUtils from "../utils/quote";

import TituloBackground from "../components/general/HeroBackground";
import NavbarDR from "../components/general/NavbarDR";
import SeparadorVertical from "../components/decoration/SeparadorVertical";
import BotonDR from "../components/general/BotonDR";
import Background from "../components/decoration/Background";
import Spacer from "../components/decoration/Spacer";
import CardEstadistica from "../components/general/CardEstadistica";
import Quote from "../components/general/Quote";

import { route } from "next/dist/next-server/server/router";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

export default function Home() {
  const router = useRouter();

  const randomQuote = QuoteUtils.generarRandomQuote();

  return (
    <div>
      <Head>
        <title>Dancing Rivers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarDR extraStyles={utilStyles.flexBetweenCenter}></NavbarDR>

      <div className={utilStyles.relativeContainer}>
        <TituloBackground
          imageSrc="/images/Inicio/background.png"
          tituloBackground="Ríos danzantes en la cuenca amazónica"
          subtituloBackground="La ciencia detrás del movimiento de los ríos"
        ></TituloBackground>
        <div
          className={cn(styles.contenedorLogos, utilStyles.flexBetweenCenter)}
        >
          <div className={styles.logo}>
            <Image
              src="/images/Inicio/Logo_utec_blanco.png"
              alt="Logo UTEC"
              height={141}
              width={298}
              layout="responsive"
            ></Image>
          </div>
          <div className={styles.logo}>
            <Image
              src="/images/Inicio/Logo_moore_blanco.png"
              alt="Logo UTEC"
              height={173}
              width={444}
              layout="responsive"
            ></Image>
          </div>
          <div className={styles.logo}>
            <Image
              src="/images/Inicio/Logo_cita_blanco.png"
              alt="Logo UTEC"
              height={200}
              width={592}
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>

      <section
        className={cn(
          utilStyles.paddingGeneral125X,
          utilStyles.flexBetweenCenter,
          utilStyles.paddingVerticalContenedorIntroMapaDatos,
          styles.contenedorTextoIntroduccion
        )}
      >
        <SeparadorVertical
          height="92.5%"
          width="1.75rem"
          backgroundColor={Constants.COLOR_PRINCIPAL}
          marginRight="5rem"
        ></SeparadorVertical>

        <p className={utilStyles.textoRegular}>
          Este portal recoge la investigación, análisis y metodología
          desarrollada para caracterizar la morfodinámica planimétrica (análisis
          espacial con sensoramiento remoto) y altimétrica (descripción de las
          formas del lecho del río y el transporte de sedimentos) de los
          principales ríos amazónicos: Marañón, Huallaga, Ucayali y Amazonas con
          el propósito de conocer y comprender mejor su dinámica física.
        </p>
      </section>

      <section>
        <Background
          height={148}
          width={2560}
          imageSrc="/images/Backgrounds/Decoracion/Background_intro_mapa_datos.png"
          className={styles.backgroundDecoracion}
          alt="Background decoracion diagonal"
        ></Background>
        <div
          className={cn(
            utilStyles.flexColumnCenterCenter,
            utilStyles.paddingGeneral2X,
            utilStyles.paddingTopContenedores,
            utilStyles.relativeContainer,
            utilStyles.contenedorColorPrincipal
          )}
        >
          <p
            className={cn(
              utilStyles.textoRegular,
              utilStyles.textoBlanco,
              utilStyles.textoCentrado
            )}
          >
            Ríos Danzantes es el primer portal web interactivo que reúne datos
            obtenidos en campo y resultados del análisis de imágenes de satélite
            sobre la dinámica hidrogeomorfológica de los ríos.
          </p>

          <BotonDR
            titulo="¡Conoce el Mapa de Datos!"
            onClick={() => {
              router.push("/mapa-de-datos");
            }}
          ></BotonDR>
        </div>
        <Spacer className={utilStyles.spacerColorPrincipal}></Spacer>
        <section
          className={cn(
            styles.contenedorEstadisticas,
            utilStyles.flexBetweenCenter,
            utilStyles.paddingGeneral,
            utilStyles.contenedorColorPrincipal
          )}
        >
          <div
            className={cn(styles.descripcion, utilStyles.flexColumnStartCenter)}
          >
            <h1 className={cn(utilStyles.tituloBold, utilStyles.textoBlanco)}>
              Estadísticas
            </h1>
            <p className={cn(utilStyles.textoRegular, utilStyles.textoBlanco)}>
              Cillum duis laboris sint enim dolore id non qui nulla.
            </p>
          </div>

          <div className={cn(styles.contenedorCardsEstaditicas)}>
            <CardEstadistica
              height="13.7rem"
              width="11.62rem"
              imgSrc="/images/Inicio/Icono_estadistica_kilometros.svg"
              titulo="5000"
              subtitulo="Kilómetros estudiados"
            ></CardEstadistica>
            <CardEstadistica
              height="11.8rem"
              width="11.62rem"
              imgSrc="/images/Inicio/Icono_estadistica_talleres.svg"
              titulo="20+"
              subtitulo="Charlas y talleres"
            ></CardEstadistica>
            <CardEstadistica
              imgSrc="/images/Inicio/Icono_estadistica_mediciones.svg"
              height="13.1rem"
              width="11.62rem"
              titulo="2018"
              subtitulo="Inicio de mediciones de campo"
            ></CardEstadistica>
            <CardEstadistica
              height="13.1rem"
              width="11.62rem"
              imgSrc="/images/Inicio/Icono_estadistica_multitemporal.svg"
              titulo="30"
              subtitulo="Años de análisis multitemporal"
            ></CardEstadistica>

            {/* <div
              style={{
                height: "40.5vh",
                width: "17.5vw",
                backgroundColor: "gray",
              }}
            ></div>
            <div
              style={{
                height: "40.5vh",
                width: "17.5vw",
                backgroundColor: "gray",
              }}
            ></div>
            <div
              style={{
                height: "40.5vh",
                width: "17.5vw",
                backgroundColor: "gray",
              }}
            ></div>
            <div
              style={{
                height: "40.5vh",
                width: "17.5vw",
                backgroundColor: "gray",
              }}
            ></div> */}
          </div>
        </section>
        <Spacer className={utilStyles.spacerColorPrincipal}></Spacer>
        <Background
          height={148}
          width={2560}
          imageSrc="/images/Backgrounds/Decoracion/Background_intro_mapa_datos_bottom.png"
          className={styles.backgroundDecoracion}
          alt="Background decoracion diagonal bottom"
        ></Background>
      </section>

      <section
        className={cn(
          utilStyles.paddingGeneral,
          utilStyles.paddingVerticalContenedores
        )}
      >
        <Quote
          imgSrc={"/images/Inicio/quotes/autor_Jorge_Abad.jpg"}
          height={300}
          width={300}
          quote={randomQuote.quote}
          autor={randomQuote.autor}
          cargoAutor={randomQuote.cargoAutor}
        ></Quote>
      </section>
    </div>
  );
}
