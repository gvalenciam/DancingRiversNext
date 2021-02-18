import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import cn from "classnames";

import utilsStyles from "../../styles/utils.module.scss";
import navbarStyles from "../../styles/components/general/NavbarDR.module.scss";
import subrayadoStyles from "../../styles/components/decoration/SubrayadoMenu.module.scss";
import * as Constants from "../../constants/Constants";

import SubrayadoMenu from "../decoration/SubrayadoMenu";
import NavbarOverlay from "./NavbarOverlay";

const NavbarDRWithRouter = (props) => {
  const router = useRouter();
  return <NavbarDR {...props} router={router}></NavbarDR>;
};

class NavbarDR extends React.Component {
  state = {
    showChildrenBackground: false,
    menuFocused: -1,
  };

  listaMenus = [
    {
      rootRoute: "/",
      route: "/",
      titulo: "Inicio",
      submenus: [
        {
          rootRoute: "/",
          route: "/nuestro-equipo",
          titulo: "Nuestro equipo",
          activo: true,
        },
        {
          rootRoute: "/",
          route: "/colaboraciones",
          titulo: "¿Con quiénes trabajamos?",
          activo: true,
        },
      ],
    },
    {
      rootRoute: "/ciencia",
      route: "/ciencia",
      titulo: "Ciencia",
      submenus: [],
    },
    {
      rootRoute: "/metodologia",
      route: "/metodologia",
      titulo: "Metodología",
      submenus: [
        {
          rootRoute: "/metodologia",
          route: "/sensoramiento-remoto",
          titulo: "Sensoramiento remoto",
          activo: true,
        },
        {
          rootRoute: "/metodologia",
          route: "/mediciones-campo",
          titulo: "Mediciones de campo",
          activo: true,
        },
        {
          rootRoute: "/metodologia",
          route: "/modelamiento-numerico",
          titulo: "Modelamiento numérico",
          activo: false,
        },
      ],
    },
    {
      rootRoute: "/datos",
      route: "/datos",
      titulo: "Datos",
      submenus: [],
    },
    {
      rootRoute: "/educacion",
      route: "/educacion",
      titulo: "Educación",
      submenus: [
        {
          rootRoute: "/educacion",
          route: "/eventos",
          titulo: "Eventos",
          activo: true,
        },
        {
          rootRoute: "/educacion",
          route: "/recursos",
          titulo: "Recursos",
          activo: true,
        },
      ],
    },
    {
      rootRoute: "/incidencia",
      route: "/incidencia",
      titulo: "Incidencia",
      submenus: [
        {
          rootRoute: "/incidencia",
          route: "/hidrovia-amazonica",
          titulo: "Hidrovía Amazónica",
          activo: true,
        },
      ],
    },
    {
      rootRoute: "/publicaciones",
      route: "/publicaciones",
      titulo: "Publicaciones",
      submenus: [
        {
          rootRoute: "/publicaciones",
          route: "/boletines",
          titulo: "Boletines",
          activo: true,
        },
        {
          rootRoute: "/publicaciones",
          route: "/infografias",
          titulo: "Infografías",
          activo: true,
        },
        {
          rootRoute: "/publicaciones",
          route: "/articulos",
          titulo: "Artículos",
          activo: false,
        },
      ],
    },
  ];

  mostrarSubrayado = (menu, index) => {
    return (
      <SubrayadoMenu
        backgroundColor={Constants.COLOR_PRINCIPAL}
        className={cn({
          [subrayadoStyles.subrayado]:
            menu.submenus.length > 0 && this.state.menuFocused === index,
          [subrayadoStyles.subrayadoHidden]:
            menu.submenus.length < 0 || this.state.menuFocused !== index,
        })}
      ></SubrayadoMenu>
    );
  };

  generarMenus = () => {
    return this.listaMenus.map((menu, index) => {
      return (
        <li key={menu.titulo} className={utilsStyles.relativeContainer}>
          <Link href={menu.route}>
            <a
              className={cn(
                navbarStyles.menuItem,
                utilsStyles.textoMenu,
                this.esMenuActivo(menu) ? navbarStyles.menuItemActivo : null
              )}
              onMouseEnter={() => {
                this.setState({
                  showChildrenBackground:
                    menu.submenus.length > 0 ? true : false,
                  menuFocused: index,
                });
              }}
            >
              {menu.titulo}
              {menu.submenus.length > 0 && this.mostrarSubrayado(menu, index)}
            </a>
          </Link>
          <ul
            className={cn({
              [navbarStyles.listaSubmenus]:
                index === this.state.menuFocused &&
                this.state.showChildrenBackground,
              [navbarStyles.listaSubmenusHidden]:
                index !== this.state.menuFocused ||
                !this.state.showChildrenBackground,
            })}
          >
            {this.generarSubmenus(menu, index)}
          </ul>
        </li>
      );
    });
  };

  generarSubmenus = (menu, index) => {
    if (menu.submenus.length > 0) {
      return menu.submenus.map((submenu) => {
        return (
          <li key={submenu.titulo} className={navbarStyles.submenuItem}>
            <Link href={submenu.route}>
              <a
                className={cn(utilsStyles.textoSubmenu)}
                onMouseEnter={() => {
                  this.setState({
                    showChildrenBackground: true,
                    menuFocused: index,
                  });
                }}
              >
                {submenu.titulo}
              </a>
            </Link>
          </li>
        );
      });
    } else {
    }
  };

  esMenuActivo = (menu) => {
    return this.props.router.pathname === menu.route ? true : false;
  };

  render() {
    return (
      <div>
        <div
          className={cn(
            utilsStyles.paddingGeneral,
            navbarStyles.navbarDR,
            utilsStyles.relativeContainer,
            utilsStyles.flexBetweenCenter,
            this.props.extraStyles
          )}
          style={{ zIndex: 2 }}
        >
          <div className={navbarStyles.navbarLogo} style={{ zIndex: 2 }}>
            <Image
              src="/images/Logos/Logo_DR_color.png"
              width={1715}
              height={375}
              layout="responsive"
              onClick={() => {
                this.props.router.push("/");
              }}
            ></Image>
          </div>

          <div className={navbarStyles.contenedorMenus} style={{ zIndex: 2 }}>
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

        <NavbarOverlay
          show={this.state.showChildrenBackground}
          onMouseLeave={() => {
            this.setState({ showChildrenBackground: false, menuFocused: -1 });
          }}
        ></NavbarOverlay>
      </div>
    );
  }
}

export default NavbarDRWithRouter;
