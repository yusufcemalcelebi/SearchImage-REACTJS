import React from "react"
import SearchBar from "./components/SearchBar"

import mainIcon from './images/icon.png';

function MainPage(props) {
    const textFields = {
        options: ["Animals", "Breakfast", "Christmas", "Office Life", "Halloween"],
        ids: [181581, 1454032, 1143269, 1895329, 395888],
        buttonText: "SEARCH"
    }

    return (
        <div className="main-page" >
            <div className="search-design">
                <div className="main-icon">
                    <img src={mainIcon} alt="" />
                </div>
                <span
                    className="main-title">
                    <strong>image</strong> search
                </span>
                <SearchBar
                    textFields={textFields}
                    handleChange={props.handleChange}
                    handleSearch={props.handleSearch}
                    values={props.values} />
            </div>
        </div>
    )
}

export default MainPage