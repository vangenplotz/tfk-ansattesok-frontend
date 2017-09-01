import "babel-polyfill"
import { render } from "react-dom"
import Routes from "./routes"

render(
		Routes,
		document.getElementById('app')
);