import React from 'react'

export interface LightsProps {
  distance: number
  offsetX?: number
  offsetY?: number
  offsetZ?: number
}

const Lights: React.FC<LightsProps> = (
  {
    offsetX=0,
    offsetY=0,
    offsetZ=0,
    distance
  }
) => {
  return (
        <>
            <ambientLight/>
        </>
  )
}

export default Lights
