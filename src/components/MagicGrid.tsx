import React from 'react'

function MagicGrid() {
  return (
    <div>
        <div className="h-screen w-full bg-black   bg-grid-white/[0.1] absolute top-0 left-0 flex items-center justify-center z-0">
      
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-950  [mask-image:radial-gradient(ellipse_at_center,transparent_2%,black)]"/>
        </div>
    </div>
  )
}

export default MagicGrid

