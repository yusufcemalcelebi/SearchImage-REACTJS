import React from "react"
import { Link } from "react-router-dom";

import SearchBar from "./components/SearchBar"
import mainIcon from './images/icon.png';

function SearchPage(props) {
    const textFields = {
        options: ["Animals", "Breakfast", "Christmas", "Office Life", "Halloween"],
        ids: [181581, 1454032, 1143269, 1895329, 395888],
        buttonText: "SEARCH"
    }

    const imageList = props.imagesWithIds.map((image) =>
        <div className="brick" key={image.id}>
            <img src={image.imgUrl} alt="result" />
        </div>)

    return (
        <div>
            <div className="search-header">
                <Link to="/" className="main-icon">
                    <img src={mainIcon} alt="" />
                </Link>
                <SearchBar
                    textFields={textFields}
                    handleChange={props.handleChange}
                    handleSearch={props.handleSearch}
                    values={props.values}
                    imagesWithIds={props.imagesWithIds} />
            </div>
            <div className="masonry">
                {imageList}
            </div>
        </div >
    )
}

export default SearchPage