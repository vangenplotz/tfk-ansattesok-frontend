import React from "react"
import { Container } from "semantic-ui-react"
import Header from "../header/header"
import Footer from "../footer/footer"

export default class Application extends React.Component {
    render() {
        return <div>
					<Header />
					{this.props.children}
					<div className="content highlight--dark">
                        <Container>
                            <Footer />
                        </Container>
                    </div>
        </div>
    }
}