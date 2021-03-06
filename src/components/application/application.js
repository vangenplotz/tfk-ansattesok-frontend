import "./application.scss"
import React from "react"
import { Container } from "semantic-ui-react"
import Footer from "../footer/footer"

export default class Application extends React.Component {
    render() {
        return <div>
					{this.props.children}
					<div className="content highlight--dark">
                        <Container>
                            <Footer />
                        </Container>
                    </div>
        </div>
    }
}