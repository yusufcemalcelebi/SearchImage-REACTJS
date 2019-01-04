import React from "react"
import { Link } from "react-router-dom";

import SearchBar from "./components/SearchBar"
import MapContainer from "./components/MapContainer"
import mainIcon from './images/icon.png';
import downloadIcon from './images/download-icon.png';

function SearchPage(props) {
    // Hardcoded options for Collections
    const textFields = {
        options: ["Animals", "Breakfast", "Christmas", "Office Life", "Halloween"],
        ids: [181581, 1454032, 1143269, 1895329, 395888],
        buttonText: "SEARCH"
    }

    const imageList =
        props.imagesWithIds.map((image) =>
            <div className="brick"
                key={image.id}
                onClick={() => props.handleImageClick(image.id)}
            >
                <img src={image.imgUrl} alt="result" />
            </div >
        )

    let createModalPopup = () => {
        let userInfo = props.clickedImageInfo.info.user;
        let clickedImageInfo = props.clickedImageInfo.info;

        return props.clickedImageInfo.visibility ?
            <div>
                <div className="overlay"
                    onClick={() => {
                        props.handleOverlayClick()
                    }}
                />

                <div className="clicked-image-modal" >
                    <img src={clickedImageInfo.urls.small}
                        alt={clickedImageInfo.description}
                    />

                    <div className="info-row" >
                        <img src={userInfo.profile_image.medium} alt="" />
                        <div className="name-wrapper">
                            <span className="user-firstname">{userInfo.first_name}</span>
                            <span className="user-username">@{userInfo.username}</span>
                        </div>
                        <a download='' href='/' className="download-button">
                            <img style={{
                                width: 15,
                                marginRight: 7
                            }} src={downloadIcon} alt="icon-download" />
                            Download
                        </a>
                    </div>

                    {(clickedImageInfo.imageLocation.position || {}).latitude ?
                        <div className="map-wrapper">
                            <MapContainer location={clickedImageInfo.imageLocation.position} />
                        </div> : ''}
                </div>
            </div> : ''
    }

    return (
        <div>
            {createModalPopup()}
            <div className="search-header">
                <Link to="/" className="main-icon">
                    <img src={mainIcon} alt="" />
                    <div className="point"></div>
                </Link>
                <SearchBar
                    textFields={textFields}
                    handleChange={props.handleChange}
                    handleSearch={props.handleSearch}
                    values={props.values}
                    imagesWithIds={props.imagesWithIds}
                />
            </div>
            <div className="masonry">
                {imageList.length > 0 ?
                    imageList :
                    <h2>There is no result</h2>}
            </div>
        </div >
    )
}

export default SearchPage