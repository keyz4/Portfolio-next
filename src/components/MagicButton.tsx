import React from 'react'

function MagicButton({title,className,icon,click}:{title:string,className:string,icon:React.ReactNode,click:()=>void}) {
  return (
    <div className='m-8' >
        <button onClick={click} className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={className}>
            {icon}
            {title} 
        </span>
        </button>
    </div>
  )
}

export default MagicButton