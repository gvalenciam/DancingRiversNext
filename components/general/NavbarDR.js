import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import cn from "classnames";

import utilsStyles from "../../styles/utils.module.scss";
import navbarStyles from "../../styles/components/general/NavbarDR.module.scss";
import * as Constants from "../../constants/Constants";

import SubrayadoMenu from "../decoration/SubrayadoMenu";

const NavbarDRWithRouter = (props) => {
  const router = useRouter();
  return <NavbarDR {...props} router={router}></NavbarDR>;
};

class NavbarDR extends React.Component {
  listaMenus = [
    {
      rootRoute: "/",
      route: "/",
      titulo: "Inicio",
    },
    {
      rootRoute: "/ciencia",
      route: "/ciencia",
      titulo: "Ciencia",
    },
    {
      rootRoute: "/metodologia",
      route: "/metodologia",
      titulo: "Metodología",
    },
    {
      rootRoute: "/datos",
      route: "/datos",
      titulo: "Datos",
    },
    {
      rootRoute: "/eduacion",
      route: "/educacion",
      titulo: "Educación",
    },
    {
      rootRoute: "/incidencia",
      route: "/incidencia",
      titulo: "Incidencia",
    },
    {
      rootRoute: "/publicaciones",
      route: "/publicaciones",
      titulo: "Publicaciones",
    },
  ];

  mostrarSubrayado = (menu) => {
    if (this.esMenuActivo(menu)) {
      return (
        <SubrayadoMenu
          height="2px"
          width="100%"
          bottom="-0.5rem"
          backgroundColor={Constants.COLOR_PRINCIPAL}
        ></SubrayadoMenu>
      );
    } else {
      return null;
    }
  };

  generarMenus = () => {
    return this.listaMenus.map((menu) => {
      return (
        <li key={menu.titulo} className={utilsStyles.relativeContainer}>
          <Link href={menu.route}>
            <a
              className={cn(
                navbarStyles.menuItem,
                utilsStyles.textoMenu,
                this.esMenuActivo(menu) ? navbarStyles.menuItemActivo : null
              )}
            >
              {menu.titulo}
              {this.mostrarSubrayado(menu)}
            </a>
          </Link>
        </li>
      );
    });
  };

  esMenuActivo = (menu) => {
    return this.props.router.pathname === menu.route ? true : false;
  };

  render() {
    return (
      <div
        className={cn(
          utilsStyles.paddingGeneral,
          navbarStyles.navbarDR,
          this.props.extraStyles
        )}
      >
        <div className={navbarStyles.navbarLogo}>
          <Image
            src="/images/Logos/Logo_DR_color.png"
            width={1887}
            height={449}
            layout="responsive"
            onClick={() => {
              this.props.router.push("/");
            }}
          ></Image>
        </div>

        <div className={navbarStyles.contenedorMenus}>
          <ul
            className={cn(
              navbarStyles.listaMenus,
              utilsStyles.flexBetweenCenter
            )}
          >
            {this.generarMenus()}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavbarDRWithRouter;
