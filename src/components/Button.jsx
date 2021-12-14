import React from 'react'
 
export default  function Button (props) { 
 
return (
<div className='button__container'>
    <button className='add__button' onClick={() => props.clickShow(true)}>Add</button>
</div>
)
}