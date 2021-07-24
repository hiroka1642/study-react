import classes from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={classes.title}>{props.page} Page</h1>

      <p className={classes.description}>
        アイテムの個数は{props.items.length}個です
      </p>
      <button onClick={props.handleReduce}>減らす</button>
    </div>
  );
}
