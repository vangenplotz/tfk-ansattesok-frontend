import React from "react"
import { Container, Grid, Image, Search } from "semantic-ui-react"
import Logo from "../../../assets/images/tfk_logo_rgb_pos.png"
import { Debounce } from "react-throttle"

export default class Header extends React.Component {
	render() {
		return <Container>
        <Grid columns={2}
              verticalAlign="bottom"
        >
            <Grid.Row>
                <Grid.Column width={4}>
                    <Image
                        src={Logo}
                        as='a'
                        href='/'
                    />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Debounce time={300} handler={'onSearchChange'}>
                        <Search className="searchbar--fluid"
                                fluid
                                loading={this.props.isLoading}
                                showNoResults={false}
                                onSearchChange={(e, data) => this.props.onChange(data.value)}                       value="Søk etter ansatte / avdelinger"
                        />
                    </Debounce>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
	}
}