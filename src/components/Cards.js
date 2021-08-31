import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Cards() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <button class="card">
            <section id="img1">
                <img id="chiefs-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>KANSAS CITY CHIEFS</h1>
                </div>
            </section>
        </button>
        <button class="card">
            <section id="img1">
                <img id="seahawks-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>SEATTLE SEAHAWKS</h1>
                </div>
            </section>
        </button>
        <button class="card">
            <section id="img1">
                <img id="packers-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>GREEN BAY PACKERS</h1>
                </div>
            </section>
        </button>
        <button class="card">
            <section id="img1">
                <img id="buccs-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>TAMPA BAY BUCCANEERS</h1>
                </div>
            </section>
        </button>
        <button class="card">
            <section id="img1">
                <img id="49ers-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>SAN FRANSISCO 49ERS</h1>
                </div>
            </section>
        </button>
        <button class="card">
            <section id="img1">
                <img id="chargers-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>LOS ANGELES CHARGERS</h1>
                </div>
            </section>
        </button>
        <button class="card">
            <section id="img1">
                <img id="patriots-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>NEW ENGLAND PATRIOTS</h1>
                </div>
            </section>
        </button>
        <button class="card">
            <section id="img1">
                <img id="dolphins-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>MIAMI DOLPHINS</h1>
                </div>
            </section>
        </button>
    );
}

export default Cards;