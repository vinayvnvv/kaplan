import React from "react";
const Book = ({data}) => {
    const {
        volumeInfo: {
            title,
            authors,
            publisher,
            publishedDate,
        } = {}
    } = data || {};
    return (
        <div className="book">
            <div>
                <div className="b-title">{title}</div>
                <div className="b-itm">Authors: {authors.join(',')}</div>
                <div className="b-itm">Publisher: {publisher}</div>
                <div className="b-itm">Published Date: {publishedDate}</div>
            </div>
        </div>
    )
}
export default Book