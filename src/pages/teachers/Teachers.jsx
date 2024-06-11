import React  from 'react'
import { forwardRef } from 'react'
import "./teachers.css"

const Teachers = forwardRef((_, ref) => {
    return (
      <div ref={ref} className='teachersdiv'>
          <div className="card">
              <h1>Narek Hakobyan</h1>
              <img src="https://smartcode.am/public/image/staff/17.png" alt="" />
              <p>React.js</p>
          </div>
          <div className="card">
              <h1>Vahe Mnatsakanyan</h1>
              <img src="https://smartcode.am/public/image/staff/26.png" alt="" />
              <p>Html, CSS</p>
          </div>
      </div>
    )
  })

export default Teachers