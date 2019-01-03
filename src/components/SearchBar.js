import React from "react"

import { Link } from "react-router-dom";


function SearchBar(props) {
    const textFields = props.textFields
    const options = textFields.options
        .map((option, index) =>
            <option value={textFields.ids[index]} key={index}>{option}</option>)

    return (
        <div className="search-bar">
            <input
                value={props.values.queryKeyword}
                onChange={props.handleChange}
                type="text"
                name="queryKeyword"
                className="query-input input-field"
                placeholder="keyword">
            </input>

            <select
                value={props.values.optionSelection}
                onChange={props.handleChange}
                name="optionSelection"
                className="dropdown-selection input-field">
                {options}
            </select>

            <Link
                to="/search"
                onClick={props.handleSearch}
                className="search-button">{textFields.buttonText}
            </Link>
        </div>
    )
}

export default SearchBar