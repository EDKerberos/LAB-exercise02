import React, { useState } from 'react';
import './LABex02style.css' 

const SinglePage = () => {
    return (
        <div className="bg">
            <header className="title">
                <h1>Simple React SPA</h1>
            </header>
            <nav className="nav">
                <div className="navbar">
                    <button className="nav-butt">HOME</button>
                    <button className="nav-butt">ABOUT</button>
                    <button className="nav-butt">CONTACT</button>
                </div>
            </nav>
            <main className="main-content">
                <h2 className="content-title">This is The Home Page.</h2>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra ex ac quam pulvinar sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum rutrum maximus eros, in hendrerit augue tempor quis. Vivamus finibus auctor iaculis. Morbi volutpat commodo rutrum. Cras non semper velit, suscipit vestibulum felis. Morbi viverra metus non ex maximus tristique. Nullam consequat sed enim et dapibus. Nam at leo in sem mollis cursus.
                    <br/><br/>
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut elementum erat dapibus augue hendrerit, ac gravida augue posuere. Vivamus sit amet iaculis nisi. Proin et arcu ut lorem placerat luctus et ut orci. Fusce risus orci, porta ultricies velit nec, vehicula molestie lacus. Etiam vitae scelerisque risus. Donec sit amet quam gravida, laoreet augue et, venenatis arcu.
                </div>
            </main>
        </div>
    )
}

export default SinglePage