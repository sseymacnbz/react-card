import { useState } from 'react'
import 'bulma/css/bulma.css'
import  Course  from './Course'
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Csharp from './images/ccsharp.png'
import KompleWeb from './images/kompleweb.jpg'
import './App.css'

function App() {

  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className='section' >
        <div className="columns">
          <div className="column">
            <Course
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit dolor temporibus hic quia? 
              Architecto eligendi ipsa rerum maxime, nisi soluta expedita consequuntur quos. Temporibus molestias ullam assumenda magni molestiae."
              image={Angular}
            />
          </div>

          <div className="column">
            <Course
              title="Bootstrap 5"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit dolor temporibus hic quia? 
              Architecto eligendi ipsa rerum maxime, nisi soluta expedita consequuntur quos. Temporibus molestias ullam assumenda magni molestiae."
              image={Bootstrap}
            />
          </div>

          <div className="column">
            <Course
              title="Komple Web"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit dolor temporibus hic quia? 
              Architecto eligendi ipsa rerum maxime, nisi soluta expedita consequuntur quos. Temporibus molestias ullam assumenda magni molestiae."
              image={Csharp}
            />
          </div>

          <div className="column">
            <Course
              title="Frontend"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit dolor temporibus hic quia? 
              Architecto eligendi ipsa rerum maxime, nisi soluta expedita consequuntur quos. Temporibus molestias ullam assumenda magni molestiae."
              image={KompleWeb}
            />
          </div>
        </div>
        </section>
        
      </div>
    </>
  );
}

export default App
