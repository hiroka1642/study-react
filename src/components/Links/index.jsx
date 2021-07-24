import classes from "src/components/Links/Links.module.css";

export function Links({ handleReduce, items }) {
  return (
    <div className={classes.grid}>
      {items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h3>{item.title}</h3>
            <p>{item.discription}</p>
          </a>
        );
      })}
    </div>
  );
}
