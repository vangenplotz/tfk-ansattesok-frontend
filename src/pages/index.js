import React from "react"
import { Link } from "react-router"
import { Button } from "semantic-ui-react"
import Logo from "../../assets/images/tfk_logo_rgb_pos.png"

export default class Index extends React.Component {
    render() {
        return <div>

					<img src={Logo} alt="logo" />
					<Link to={'/employees'}><Button content={'Søk etter ansatte'} icon={'user'} labelPosition={'left'} /></Link>
					<Link to={'/departments'}><Button content={'Avdelingsoversikt'} icon={'briefcase'} labelPosition={'right'} /></Link>
        </div>
    }
}