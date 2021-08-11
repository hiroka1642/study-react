import classes from "src/components/Header/Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => [
        <Link href={item.href} key={item.href}>
          <a className={classes.anchor}>{item.label}</a>
        </Link>,
      ])}
    </header>
  );
}
