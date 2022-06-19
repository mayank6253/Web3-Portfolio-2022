import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'
import Laetestproject from './Laetestproject'

export default function Main() {
  return (
    <div>
      <div className="container">
        <div className="main-area">
          <div className="row">
            <div className="col-md-6">
              <div className="main-content">
                <h3 className="hello">HI THERE</h3>
                <h1 className="heading">
                  I am Mustafa Siddique.
                  <br />I am a Web & WordPress developer based in India.
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="myPortfolio">
                <Laetestproject />
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <Link to="/" className="scroll">
              <span>SCROLL DOWN</span>
              <AiOutlineCaretDown color="red" style={{ marginLeft: '10px' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
