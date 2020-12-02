import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../head'
import './main.scss'

const Main = () => {
  const [user, setUser] = React.useState('')
  return (
    <div className="bg">
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen ">
        <div className="text-white font-bold rounded-lg border shadow-lg p-10 ">
          <input
            type="text"
            value={user}
            className="bg-color-green mr-5 rounded-lg pl-4"
            id="input-field"
            placeholder="Логин"
            onChange={(el) => setUser(el.target.value)}
          />
          <Link to={`/${user}`}>VIEW</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
