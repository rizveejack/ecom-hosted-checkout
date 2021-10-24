import React from 'react'

const MegaMenu = () => {
    return (
        <div className="mega-category-menu">
            <span className="cat-button"><i className="lni lni-menu"></i>All Categories</span>
            <ul className="sub-category">
                <li><a href="#">Electronics <i className="lni lni-chevron-right"></i></a>
                    <ul className="inner-sub-category">
                        <li><a href="#">Digital Cameras</a></li>
                    </ul>
                </li>
                <li><a href="#">accessories</a></li>
            </ul>
        </div>
    )
}

export default MegaMenu
