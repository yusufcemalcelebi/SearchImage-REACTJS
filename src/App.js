import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Switch, Route } from "react-router-dom";

import MainPage from "./MainPage"
import SearchPage from "./SearchPage";

class App extends React.Component {
    constructor(props) {
        super()
        this.state = {
            queryKeyword: '',
            optionSelection: '',
            resultList: [],
            location: props.location
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleAPI(resultList) {
        this.setState({
            resultList: resultList
        })
    }

    render() {
        const search = {
            queryKeyword: this.state.queryKeyword,
            optionSelection: this.state.optionSelection
        }

        return (
            <Router>
                <div>
                    <Switch location={this.state.location}>
                        <Route
                            exact path="/"
                            render={(props) => <MainPage {...props}
                                handleChange={this.handleChange}
                                values={search}
                            />}
                        />
                        <Route
                            path="/search"
                            render={(props) => <SearchPage {...props}
                                handleChange={this.handleChange}
                                values={search}
                                resultList={this.state.resultList}
                            />}
                        />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App