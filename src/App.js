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
            clickedImageInfo: {
                visibility: false,
                info: {}
            },
            apiResponse: [],
            location: props.location
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleImageClick = this.handleImageClick.bind(this)
        this.handleOverlayClick = this.handleOverlayClick.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSearch() {
        const endPointUrl =
            "https://api.unsplash.com/search/photos?query=" + encodeURIComponent(this.state.queryKeyword) +
            "&collections=" + this.state.optionSelection + "&page=1";

        fetch(endPointUrl, {
            'method': 'get',
            'Accept-Version': 'v1',
            headers: new Headers({
                'Authorization': 'Client-ID ef0777b2d8ae3f437cc7b389231aee62e5c5710f8c43cbc144f26771e0d62708',
            }),
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    apiResponse: data.results
                })
            })
    }

    handleImageClick(id) {
        let clickedImageInfo = this.state.apiResponse.find(image => image.id === id)

        this.setState({
            clickedImageInfo: {
                visibility: true,
                info: clickedImageInfo
            }
        })
    }

    handleOverlayClick() {
        this.setState(prevState => ({
            clickedImageInfo: {
                visibility: false,
                info: prevState.clickedImageInfo.info
            }
        }))
    }

    getImageUrls() {
        let imagesWithIds = []
        imagesWithIds = this.state.apiResponse.map((image, index) => {
            return {
                id: image.id,
                imgUrl: image.urls.small
            }
        })

        return imagesWithIds
    }

    render() {
        let imagesWithIds = this.getImageUrls()
        return (
            <Router>
                <div>
                    <Switch location={this.state.location}>
                        <Route
                            exact path="/"
                            render={(props) => <MainPage {...props}
                                handleChange={this.handleChange}
                                handleSearch={this.handleSearch}
                                values={{
                                    queryKeyword: this.state.queryKeyword,
                                    optionSelection: this.state.optionSelection
                                }}
                            />}
                        />
                        <Route
                            path="/search"
                            render={(props) => <SearchPage {...props}
                                handleChange={this.handleChange}
                                handleSearch={this.handleSearch}
                                handleImageClick={this.handleImageClick}
                                handleOverlayClick={this.handleOverlayClick}
                                values={{
                                    queryKeyword: this.state.queryKeyword,
                                    optionSelection: this.state.optionSelection
                                }}
                                imagesWithIds={imagesWithIds}
                                clickedImageInfo={this.state.clickedImageInfo}
                            />}
                        />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App