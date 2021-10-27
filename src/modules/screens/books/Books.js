import React, { useEffect, useState } from 'react';
import Book from './Book';
import './style.scss';

function debounce(callback, timeout) {
    let timer;
    return (args) => {
      args.persist();
      clearTimeout(timer)
      timer = setTimeout(() => {callback.call(this, args)}, timeout);
    }
}

function Books() {
    const [books, setBooks] = useState({request: false, data: null, error: null, filteredData: null});
    useEffect(() => {
        setBooks({request: true});
        fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
        .then(res => res.json())
        .then(res => {
            setBooks({request: false, data: res.items, filteredData: res.items});
        }).catch(err => {
            setBooks({request: false, data: null, error: err});
        })
    }, []);
    const handleSearch = (e) => {
        const value = e.target.value;
        if(value && books.data) {
            const items = books.data.filter(i => {
                const t = String(value).toLowerCase();
                const _t = String((i && i.volumeInfo && i.volumeInfo.title) || '').toLowerCase()
                return _t.includes(t)
            })
            setBooks({...books, filteredData: items});
        } else {
            setBooks({...books, filteredData: books.data});
        }
    };
    const debounceSearch = debounce(handleSearch, 1000);
    return <div className="books">
        <div className="app-container">
            <div className="t-bar">
                <div className="title">Books</div>
                <button className="btn">Create New Book</button>
            </div>
            <div className="search">
                <i className="ion-ios-search-strong"/>
                <input  placeholder={'Search'} onChange={debounceSearch}/>
            </div>
            <div className="b-lists">
                {books.request ? 
                    <div className="loader" /> :
                    <>
                        <div className="s-ttl">All Books</div>
                        <div className="lists">
                            {books.filteredData && (
                                books.filteredData.map(itm =>
                                    <Book data={itm}/>
                                )
                            )}
                        </div>
                        {books.filteredData && books.data && books.data.length > 0 && books.filteredData.length === 0 && (
                            <div className="no-res">No books found</div>
                        )}
                    </>
                }
            </div>
        </div>
    </div>
}

export default Books;