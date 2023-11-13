import React from 'react'

const Card = ({title, year, rate, description, prof}) => {
  return (
    <>
        <div className="box btn_shadow">
            <div className="title_content d_flex">
                <div className="title">
                    <h3>{title}</h3>
                    <p>{prof}</p>
                    <span>{year}</span>
                </div>
                <div className="rate">
                    <button className='btn_shadow'>{rate}</button>
                </div>
            </div>
            <hr />
            <p>{description}</p>
        </div>
    </>
  )
}

export default Card