import Head from "next/head";
import Image from "next/image";
import cs from "classnames";

import utilStyles from "../styles/utils.module.scss";
import styles from "../styles/pages/Inicio.module.scss";

import TituloBackground from "../components/general/HeroBackground";
import NavbarDR from "../components/general/NavbarDR";

export default function Home() {
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
          className={cs(styles.contenedorLogos, utilStyles.flexBetweenCenter)}
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
    </div>
  );
}
