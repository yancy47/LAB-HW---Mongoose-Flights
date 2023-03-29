import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Flight Board (Index View)</h1>
            <ul>
                {props.results.map((flight, index) => 
                    <li key={index}>
                        <p>Airline: <strong>{flight.airline},</strong>
                        Flight Number: <a href={`/flight/${flight._id}`}> <strong>
                        {flight.flightNo}</strong></a> Departure Date/Time:
                        {flight.departs.toString()} </p>
                    </li>
                )}
            </ul>
            <a href="/flights/New">Add...</a>
            <br />

            <form action = "/fruits/seed" method="POST">
                <button>SEED</button>
            </form>
        </div>
    )
}

export default Index