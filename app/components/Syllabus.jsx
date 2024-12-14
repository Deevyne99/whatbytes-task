import ProgressBar from './ProgressBar'

// import React from 'react'

const Syllabus = () => {
  return (
    <div className='mt-16 border gap-8 flex flex-col rounded-md p-4 w-full'>
      Syllabus
      <div>
        <ProgressBar
          progress={40}
          status={'html'}
          desc={'Html tools, forms, history'}
        />
      </div>
      <div>
        <ProgressBar
          progress={40}
          status={'html'}
          desc={'tags & refrences in html'}
        />
      </div>
      <div>
        <ProgressBar
          progress={40}
          status={'html'}
          desc={'table & refrences in html'}
        />
      </div>
      <div>
        <ProgressBar
          progress={40}
          status={'html'}
          desc={'table & css basics'}
        />
      </div>
    </div>
  )
}

export default Syllabus
