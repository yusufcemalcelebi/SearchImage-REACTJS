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
                name="queryKeyword"
                className="query-input input-field"
                value={props.values.queryKeyword}
                onChange={props.handleChange}
                type="text"
                spellCheck="false"
                autoComplete="off"
                placeholder="Query"
            >
            </input>

            <select
                name="optionSelection"
                className="dropdown-selection input-field"
                value={props.values.optionSelection}
                onChange={props.handleChange}
            >
                <option value="" hidden>Collections</option>
                {options}
            </select>

            <Link
                className="search-button"
                to="/search"
                onClick={props.handleSearch}
            >
                {textFields.buttonText}
            </Link>
        </div>
    )
}

export default SearchBar