import React from 'react'
import spinner from '../assets/spinner.svg'

export default function Spinner() {
  return (
    <div className='flex fixed left-0 right-0 bottom-0 top-0 z-50 items-center justify-center w-full h-full bg-black bg-opacity-50'>
      <div>
        {/* <img src={spinner} alt="Loading..." className="h-24" /> */}
        {/* <div class="newtons-cradle">
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div> */}
        <section class="loader">
      <div>
        <div>
          <span class="one h6"></span>
          <span class="two h3"></span>
        </div>
      </div>

      <div>
        <div>
          <span class="one h1"></span>
        </div>
      </div>

      <div>
        <div>
          <span class="two h2"></span>
        </div>
      </div>
      <div>
        <div>
          <span class="one h4"></span>
        </div>
      </div>
    </section>
        </div>
      </div>
  )
}
