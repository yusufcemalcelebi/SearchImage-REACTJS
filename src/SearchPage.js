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
        <div className="brick" key={image.id} onClick={() => props.handleImageClick(image.id)}>
            <img src={image.imgUrl} alt="result" />
        </div >)

    let createModalPopup = () => {
        console.log(props.clickedImageInfo.info)
        return props.clickedImageInfo.visibility ?
            <div>
                <div className="overlay" onClick={() => {
                    props.handleOverlayClick()
                }} />
                <div className="clicked-image-modal" >
                    <img src={props.clickedImageInfo.info.urls.small} alt="result" />
                    <div className="info-row" >
                        <img src={props.clickedImageInfo.info.user.profile_image.medium} alt="" />
                        <div className="name-wrapper">
                            <span className="user-firstname">{props.clickedImageInfo.info.user.first_name}</span>
                            <span className="user-username">@{props.clickedImageInfo.info.user.username}</span>
                        </div>
                    </div>
                </div>
            </div> : ''
    }

    return (
        <div>
            {createModalPopup()}
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