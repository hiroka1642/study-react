import classes from "src/components/Header/Header.module.css";

export function Header() {
  return (
    <div className={classes.title}>
      <a href="">index</a>
      <a href="/about">about</a>
    </div>
  );
}
