import React from 'react'
import '../styles/index.css'

class InfoBox extends React.Component {
    render() {
        return (
            <div className="info_box">
                <hr style={{borderTop: "4px solid black"}}/>
                <h1>420chan</h1>
                <h2>A 4chan clone I made in not a lot of time</h2>
                <h2 className="new_thread"><a href='/makePost'>[Start a new thread]</a></h2>
                <hr style={{borderTop: "4px solid black"}}/>
            </div>
        )
    }
}

export default InfoBox