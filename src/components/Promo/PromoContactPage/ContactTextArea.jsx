
import React from "react"

const PromoTextArea = ({tag, name, inputHandler}) =>{


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
      <textarea style={{ backgroundColor:'transparent', width:'100%', outline:'none', height:'200px'}}  onChange={inputHandler} type="text" name={name}/>
    </div>
  )
}

export default PromoTextArea;