import React from "react"
import { Link } from "react-router"
import { Button } from "semantic-ui-react"

export default class Index extends React.Component {
    render() {
        return <div>


					<Link to={'/employees'}><Button content={'Søk etter ansatte'} icon={'user'} labelPosition={'left'} /></Link>
					<Link to={'/departments'}><Button content={'Avdelingsoversikt'} icon={'briefcase'} labelPosition={'right'} /></Link>
        </div>
    }
}