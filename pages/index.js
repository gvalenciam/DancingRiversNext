import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.scss";
import cs from "classnames";

import styles from "../styles/pages/Inicio.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.seccionBienvenida}>
        <Image
          src={"/images/Inicio/background.png"}
          alt="Background inicio"
          layout="fill"
        ></Image>
        <div className={cs(utilStyles.contenedorTituloSubtituloBackground)}>
          <h1 className={utilStyles.tituloBackground}>
            Ríos danzantes en la cuenca amazónica
          </h1>
          <p className={utilStyles.subtituloBackground}>
            La ciencia detrás del movimiento de los ríos
          </p>
        </div>
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
      </section>
    </div>
  );
}
