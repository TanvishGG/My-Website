const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
    icon: "/home.png",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: "/projects.png",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: "/contact.png",
  },
];

interface MenuItem {
  title: string;
  href: string;
  icon: string;
}

export default menuItems;
