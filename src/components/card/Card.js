import { useState } from "react";

const Card = ({cardName, cardImg, cardOptions}) => {
const [show, setshow] = useState(true)
  const handleContent = (e) => {
    setshow(!show)
  }
  return (
    <div className="card">
      {show 
        ?  (<div onClick={handleContent}>
              <img  src= {cardImg} alt="" />
              <h5>{cardName}</h5>
            </div>
            )
          : (<div className="card-backside" onClick={handleContent} >
              <ul>
                {cardOptions.map(i=><li>{i}</li>)}
              </ul>
              </div>)
            
  }
</div>
  )}

export default Card;