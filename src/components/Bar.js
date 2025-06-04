
import React, { useState, useEffect } from 'react'
import './Bar.css';


function Bar({ blocks, compare, sorted, swap }) {
 const [width, setWidth] = useState(
    Math.min(0, Math.ceil(window.innerWidth / blocks.length) - 5)
  )
  const color = blocks.length <= 50 && width > 14 ? 'black' : 'transparent'

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
    }

    window.addEventListener('resize', handleResize)

    setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
  }, [blocks.length])

  return (
    <div className='listBlocks'>
      {blocks.map((block, i) => {
        const height = (block * 500) / blocks.length
        let bg = "#1eb8ff";

    
        if (compare && (i === compare[0] || i === compare[1])) {
          bg = "#e0c840"
        }

        if (swap && (i === swap[0] || i === swap[1])) {
          bg = 'red'
        }
     
        if (sorted && sorted.includes(i)) {
          bg = '#4bc52e'
        }

        const style = {
          backgroundColor: bg,
          color: color,
          height: height,
          width: width,
        }
        return (
          <div key={i} className='block' style={style}>
            {block}
          </div>
        )
      })}
    </div>
  )
}

export default Bar