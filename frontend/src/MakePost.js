import { useState } from 'react'
import './styles/index.css'

export default function MakePost() {

    const [nick , setNick] = useState("")
    const [comment , setComment] = useState("")
    const [re , setResult] = useState("Press Submit")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (nick === "") {}
        else if (comment === "") {}
        else {
            //fetch()
            let url = "/api/makePost?nick="+nick+"&&comment="+comment
            fetch(url)
                .then(response => response.json())
                .then (r => {
                    console.log(r.result)
                    setResult(r.result)
                })
        }
    }

    return (
        <div>
            <table className='make_post'>
                <tr className='make_post'>
                    <td className='make_post'>Nick</td>
                    <input className='make_post' onChange={e => setNick(e.target.value)}></input>
                </tr>
                <tr className='make_post'>
                    <td className='make_post'>Comment</td>
                    <input className='make_post' onChange={e => {setComment(e.target.value)}}></input>
                </tr>
            </table>
            <div className='center'>
                <button className='b' onClick={handleSubmit}>Submit</button>
            </div>
            <div className='center'>
                <h1>{re}</h1>
            </div>
        </div>
    )
}