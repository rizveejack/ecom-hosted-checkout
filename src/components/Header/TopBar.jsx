import React from 'react'
import LoginButton from './LoginButton'

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12">
                        <div className="top-middle">
                            <p className="text-left text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque adipisci doloribus, atque totam vel numquam sequi rem sapiente
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="top-end">
                            <LoginButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
