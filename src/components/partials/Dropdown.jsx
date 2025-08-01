import React from 'react'

const Dropdown = ({title,options,func}) => {
  return (
    <div className='select'>
        <select onChange={func} defaultValue='0'  name="format" id="format">
            <option value="0" disabled>
                {title}
            </option>
              {options.map((o,i)=>(<option value={o} key={i} >
                {o.toUpperCase()}
            </option>))}        
         </select>
      
    </div>
  )
}

export default Dropdown
