import React from'react';
import '../../style/home.css';


export default function Home() {
    return(
        <> 
            <div className='hero'>
                <div className='hero-content'>
                    <h1>Welcome to the to-do App</h1>
                    <p>This is a to-do app that allows you to add, delete, and edit tasks.</p>
                </div>
                <div className='hero-illustration'>
                    <img src="/hero_illustration.svg" alt="Illustration" width={"50%"} height={"50%"} />
                </div>
            </div>
        </>
    )
}