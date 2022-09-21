import { render } from 'preact'
import { App } from './app'
import "./styles/index.scss"


render( <App/>, document.getElementById( 'app' ) as HTMLElement )
