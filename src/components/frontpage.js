import React from 'react';
import { Link } from "@reach/router"

function Frontpage() {
    return (
        <div>
            <div className="hero-wrapper dark">
                <div className="hero-content">
                    <h1 className="logo">snuus</h1>
                    <h2>✋ stopp snusinga</h2>
                    <h2>👌 spar spenn</h2>
                </div>
            </div>

            <div className="hero-wrapper light">
                <div className="hero-content">
                    <h1>Hva er snuus?</h1>
                    <p>👉 snuus er en enkel, gratis og reklamefri tjeneste for å se hvor mye spenn du sparer når du snoozer snusen.</p>
                    <p>👉 Logg deg inn med Facebook eller Google, snooze snusen og se hvor mye penger du har spart etterhvert som tida går.</p>
                </div>
            </div>

            <div className="hero-wrapper dark">
                <div className="hero-content">
                    <h1>Kjør på!</h1>
                    <p>snuus er reklamefri og gratis å bruke, og jeg bryr meg ikke om hvem du er. 🤷‍♀️</p>
                    <Link to="/login">logg inn</Link>
                    <Link to="/signup">lag bruker</Link>
                </div>
            </div>
        </div>
    );
}
  
export default Frontpage;