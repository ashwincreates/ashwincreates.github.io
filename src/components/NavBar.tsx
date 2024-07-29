"use client";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Sheet,
  listItemButtonClasses,
} from "@mui/joy";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";

const routes = [
  { title: "Projects", route: "projects" },
  { title: "About", route: "about" },
];

function NavBar() {
  const navigate = useRouter();
  const pathname = usePathname();
  return (
    <Sheet
      variant="outlined"
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        borderTop: 0,
        borderLeft: 0,
        borderBottom: 0,
        width: "64px",
      }}
    >
      <List>
        <ListItem
          sx={{
            "--ListItem-paddingY": "0.8rem",
            marginBottom: 2,
            [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected} `]:
              { backgroundColor: "red" },
          }}
        >
          <ListItemButton onClick={() => navigate.push("/")}>
            <ListItemContent sx={{ justifyContent: "center", display: "flex" }}>
              <Logo />
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        {routes.map((item) => {
          return (
            <ListItem sx={{ "--ListItem-paddingY": "1rem" }}>
              <ListItemButton
                onClick={() => navigate.push(item.route)}
                selected={pathname.includes(item.route)}
              >
                <ListItemContent
                  sx={(theme) => ({
                    writingMode: "vertical-lr",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    ...theme.typography["body-xs"],
                    fontFamily: (theme) => theme.fontFamily.display,
                    lineHeight: 3,
                  })}
                >
                  {item.title}
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Sheet>
  );
}

export default NavBar;
