import React from "react"
import { Route } from "react-router"
import Index from "../containers/departments"
import Show from "../containers/departments/show"

export default <Route>
	<Route path="/departments" component={Index} />
	<Route path="/departments/:id" component={Show} />
</Route>