import React from 'react'
import img from '../images/d0d6df0f1c704444bd4fe9bdc0012873.jpeg'
function FirstSection() {
  return (
    <section className='h-96 bg-firstSectionColor flex items-center justify-center object-cover'>
        <img src={img} className='w-96 basis-1/3' alt="resim" />
    </section>
  )
}

export default FirstSection