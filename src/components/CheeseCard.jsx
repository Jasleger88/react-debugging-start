import React from "react"

function CheeseCard({ name, image }) {
  return ( 
  <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={name} />
        </figure>
      </div>
    </div>
  )
}

export default CheeseCard
