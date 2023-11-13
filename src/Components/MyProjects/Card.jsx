
const Card = ({image, date ,title ,desc,}) => {

    return (
      <>
        <div className='box btn_shadow'>
          <div className='img'>
            <img className="image" src={image} alt=''  />
          </div>
          <div className='category d_flex'>
            <span >{date}</span>
          </div>
          <div className='title'>
            <h1 >{title}</h1>
            <h5>{desc}</h5>
          </div>
        </div>
      </>
    )
  }
  
  export default Card