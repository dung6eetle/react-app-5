import React from 'react'
 function Jokes(props) {
     return(
         <div>
             <h3><font color="#3AC1EF">▍ВеСелЫе АнЕкДоТы</font></h3>
             <p>Joke #{props.info.number}</p>
             <p>▍{props.info.body}</p>
             <p>@{props.info.acter}</p>
         </div>
        
     )
 }
 export default Jokes