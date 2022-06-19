import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa'

export default function Laetestproject() {
  return (
    <div className="right-column">
      <div className="buttons">
        <Link to="/" className="button">
          LATEST PROJECTS
        </Link>
        <Link to="/" className="button">
          MORE ABOUT ME
        </Link>
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/mustafa-siddiq"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn color='#fff'/>
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-siddiq"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter color='#fff'/>
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-siddiq"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram color='#fff'/>
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-siddiq"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub color='#fff'/>
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-siddiq"
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow color='#fff'/>
        </a>
      </div>
    </div>
  )
}
