import React from 'react'
import './Home.css'
import subsc from '../components/Assets/Subscribe & plans 1.png'
const Home = () => {
    return (
        <div className='main'>
            <div className='card_wrap'>
                <div className='card'>
                    <h1>1.Create Account</h1>
                    <p>Create your account using phone number or
                        email and take a free trail at ₹1</p>
                </div>

                <div className='card'>
                    <h1>2.Subscribe</h1>
                    <p>Choose your preferred duration and select
                        subscription package for your sessions</p>
                </div>
            </div>
            <div className='card_wrap'>
                <img src={subsc} />
            </div>

            <div className='card_wrap'>
                <div className='card'>
                    <h1>3.Select time slot</h1>
                    <p>Sunscribe & select any time slot betwwen
                        10 AM to 12 midnight</p>
                </div>


                <div className='card'>
                    <h1>4.You are done</h1>
                    <p>That's it! start practicing and reach your
                        learning goal in speaking</p>
                </div>
            </div>
        </div>
    )
}

export default Home;