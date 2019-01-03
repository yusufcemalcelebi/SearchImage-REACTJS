import React from "react"
import SearchBar from "./components/SearchBar"

function MainPage(props) {
    const textFields = {
        options: ["View", "Car", "Horses"],
        buttonText: "SEARCH"
    }

    return (
        <div className="main-page" >
            <div className="search-design">
                <div
                    className="main-icon"
                    src="images/icon.png"
                    alt="" />
                <span
                    className="main-title">
                    <strong>image</strong> search
                </span>
                <SearchBar
                    textFields={textFields}
                    handleChange={props.handleChange}
                    search={props.values} />
            </div>
        </div>
    )
}

export default MainPage