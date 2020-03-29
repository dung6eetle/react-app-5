import React from 'react'
 function Jokes(props) {
     return(
         <div>
             <h3><font color="#3AC1EF">▍ВеСелЫе АнЕкДоТы</font></h3>
             <p>Joke #{props.info.number}</p>
             <p>▍{props.info.body}</p>
             <p style={{display: props.info.acter ? 'block' : 'none'}}>@{props.info.acter}</p>
             <hr></hr>
         </div>
        
     )
 }
 export default Jokes