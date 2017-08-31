import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"

export default class Application extends React.Component {
    render() {
        return <div>
					<Header />
					{this.props.children}
					<Footer />
        </div>
    }
}