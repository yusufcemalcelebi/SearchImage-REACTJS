import React from "react"
import SearchBar from "./components/SearchBar"

class SearchPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            handleChange: props.handleChange,
            values: props.values,
            resultList: props.resultList
        }
    }

    componentDidMount() {
        // Need to add Authorization Header with access key 
        // 
        fetch("https://api.unsplash.com/photos?page=1&query=horses  /", {
            'method': 'get',
            'Accept-Version': 'v1',
            headers: new Headers({
                'Authorization': 'Client-ID ef0777b2d8ae3f437cc7b389231aee62e5c5710f8c43cbc144f26771e0d62708',
            }),
        })
            .then(response => response.json())
            .then((data) => console.log(data))
    }

    render() {
        const textFields = {
            options: ["View", "Car", "Horses"],
            buttonText: "SEARCH"
        }

        return (
            <div className="search-header">
                <div
                    className="main-icon"
                    src="images/icon.png"
                    alt="" />
                <SearchBar
                    textFields={textFields}
                    handleChange={this.state.handleChange}
                    search={this.state.values} />
            </div>
        )
    }
}


export default SearchPage