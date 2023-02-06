import React, { useState } from 'react'

const Podcastplayer = () => {
const url="http://localhost:5000/"
const [loading, setLoading] = useState(true)
const [podcastDetails, setPodcastDetails] = useState(null)

const podcastPlayer=()=>{
  
}

const showDetails=()=>{
  if(!loading){
    return (
        <div className="row">
          <div className="col-md-8">
            <img
              src={url + podcastDetails.thumbnail}
              className="img-fluid mt-3"
            />
            ;
          </div>
          <div className="col-md-4">
            <div className="mt-3">
              <h2>{podcastDetails.title}</h2>
              <p>Uploaded By : {podcastDetails.createdBy.username}</p>
              <p>{new Date(podcastDetails.createdAt).toLocaleDateString()}</p>
              {podcastPlayer()}
            </div>
          </div>
        </div>
    )
  }
}

  return (
    <div style={{backgroundColor:"rgb(98 22 208 / 51%)", height:"100vh"}}>{showDetails()}</div>
  )
}

export default Podcastplayer