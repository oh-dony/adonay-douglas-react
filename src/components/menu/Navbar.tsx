import { ReactNode } from "react";

// Mock
import { menuLinks } from "../mocks/LinksMenuMock";

// Components

import NavBarLinks from "./NavBarLinks";
// Menu Styled Components
import { Nav } from "./Menu.style";
import { MenuTestIDEnum } from "./enum/MenuTestIDEnum";

interface NavbarProps {
  openNav: string;
  children: ReactNode;
}

function Navbar({ openNav, children }: NavbarProps) {
  return (
    <Nav open_nav={openNav} data-testid={MenuTestIDEnum.MENU_NAVBAR}>
      <div className="flex items-start flex-col gap-2 p-5 md:p-0 md:flex-row md:items-center">
        {menuLinks.map((menuLink, index) => (
          <NavBarLinks
            key={index}
            href={menuLink.href}
            text={menuLink.text}
            icon={menuLink.icon}
            active={menuLink.active}
          />
        ))}
        {children}
      </div>
    </Nav>
  );
}

export default Navbar;
