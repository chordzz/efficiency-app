import React from 'react'

const Checkmark = ({ mode }) => {
    
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill={`${mode === 'done' ? '#c8e6c9' : '#D3D3D3'}`} d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill={`${mode === 'done' ? '#4caf50' : 'grey'}`} d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"/></svg>
  )
}

export default Checkmark