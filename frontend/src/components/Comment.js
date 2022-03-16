import React from 'react'
import '../styles/index.css'

class Comment extends React.Component {
    render() {
        return (
            <div className="comment_box">
                <hr />
                <h1 className='text' style={{color: '#4A7C59'}}>{this.props.nick}</h1>
                <h2 className='text' style={{color: '#3D348B'}}>{this.props.comment}</h2>
                <hr />
            </div>
        )
    }
}

export default Comment