import React from 'react'

function IFrame() {
  return (
    <div className='my-4'>
        <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/55froGoidzE"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
    </div>
  )
}

export default IFrame
