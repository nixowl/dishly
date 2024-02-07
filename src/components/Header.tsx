import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem
} from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Search'];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavLink to="/">
            <h1 className="text-3xl">dishly</h1>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to="/" className="text-lg">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/search" className="text-lg">
            Search
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/favorites" className="text-lg">
            Favorites
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
