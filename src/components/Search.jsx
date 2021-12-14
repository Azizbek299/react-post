import React from 'react'
 
export default  function Search (props) { 
 
return (
<div className='search__container'>
    <input type="text" placeholder="Search ..."
    value={props.forSearchQuery}				
    onChange={e => props.forSetSearchQuery(e.target.value)} 	
    />
</div>
)
}