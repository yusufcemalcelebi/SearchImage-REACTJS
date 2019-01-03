import React from "react"

import { Link } from "react-router-dom";


function SearchBar(props) {
    const textFields = props.textFields
    const options = textFields.options
        .map((option, index) =>
            <option value={option} key={index}>{option}</option>)

    return (
        <div className="search-bar">
            <input
                value={props.search.queryKeyword}
                onChange={props.handleChange}
                type="text"
                name="queryKeyword"
                className="query-input input-field"
                placeholder="keyword">
            </input>

            <select
                value={props.search.optionSelection}
                onChange={props.handleChange}
                name="optionSelection"
                className="dropdown-selection input-field">
                {options}
            </select>

            <Link
                to="/search"
                onClick={() => console.log('hi')}
                className="search-button">{textFields.buttonText}
            </Link>
        </div>
    )
}

export default SearchBar