"use client";
import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Sheet,
  listItemButtonClasses,
} from "@mui/joy";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import NavLink from "next/link";
import { routes } from "../routes";

function NavBar() {
  const navigate = useRouter();
  const pathname = usePathname();
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: { xs: 'none', sm: 'block' },
        position: "fixed",
        top: 8,
        bottom: 8,
        left: 8,
        borderRadius: 'sm',
        width: "64px",
      }}
    >
      <List>
        <ListItem
          sx={{
            "--ListItem-paddingY": "0.8rem",
            marginBottom: 2,
          }}
        >
          <ListItemButton onClick={() => navigate.push("/")}>
            <ListItemContent sx={{ justifyContent: "center", display: "flex" }}>
              <Logo />
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        {routes.map((item) => {
          const NavItemLink = item.type === 'route' ? NavLink : Link;
          return (
            <ListItem sx={{ "--ListItem-paddingY": "1rem" }} key={item.title}>
              <ListItemButton
                selected={pathname.includes(item.route)}
              >
                <NavItemLink style={{ textDecoration: 'none' }} target={item.type === 'link' ? '_blank' : undefined} href={item.route}>
                  <ListItemContent
                    sx={(theme) => ({
                      writingMode: "vertical-lr",
                      textOrientation: "mixed",
                      textDecoration: 'none',
                      transform: "rotate(180deg)",
                      ...theme.typography["body-xs"],
                      fontFamily: (theme) => theme.fontFamily.display,
                      lineHeight: 3,
                    })}
                  >
                    {item.title}
                  </ListItemContent>
                </NavItemLink>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Sheet>
  );
}

export default NavBar;
