import React from "react";


const Home = () => {
    return (
        <div className="home-bg">
            
            <header>
                <h1>Welcome to Our Food Store</h1>
            </header>
            <main>
                <section className="intro-section">
                    <h2>Fresh Food Delivered to Your Doorstep</h2>
                    <p>
                        Discover a wide range of fresh, organic, and high-quality food items, handpicked just for you.
                    </p>
                    <a href="/dashboard" className="cta-button">Shop Now</a>
                </section>
            </main>
        </div>
    );
};

export default Home;
