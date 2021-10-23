import React from 'react'

const Search = () => {
    return (

        <div className="main-menu-search">

            <div className="navbar-search search-style-5">
                <div className="search-select">
                    <div className="select-position">
                        <select id="select1">
                            <option defaultValue={"all"} value="all">All</option>
                            <option value="1">option 01</option>
                            <option value="2">option 02</option>
                            <option value="3">option 03</option>
                            <option value="4">option 04</option>
                            <option value="5">option 05</option>
                        </select>
                    </div>
                </div>
                <div className="search-input">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="search-btn">
                    <button><i className="lni lni-search-alt"></i></button>
                </div>
            </div>

        </div>

    )
}

export default Search
