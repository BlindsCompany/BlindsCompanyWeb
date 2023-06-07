
import React from "react"

const PromoTextField = ({tag,inputHandler, name}) =>{


  return(
    <div style={{
      border:'1px solid rgba(0,0,0,.125)', 
      borderRadius: '0.25rem',
      paddingLeft:'10px',
      paddingRight:'10px',
      paddingTop:'5px', 
      paddingBottom:'5px',
      width:'100%'
      }}>
      {tag}
      <input style={{ backgroundColor:'transparent', width:'100%', outline:'none'}} type="text" onChange={inputHandler} name={name}/>
    </div>
  )
}

export default PromoTextField;