import classes from './Main.module.css'
import {Links } from '../components/Links'
import {Headline} from '../components/Headline'


export  default function Main(props) {
  return (

      <main className={classes.main}>
        <Headline  
        page={props.page}
        >
        <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>

        <Links />



      </main>
      

  )
}
