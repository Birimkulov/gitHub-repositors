import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={`${props.user.avatar_url}`} alt="" className="w-20 h-20 rounded-sm" />
        <h4 className="uppercase text-5xl ml-6">{props.user.login}</h4>
      </div>
      <div>
        <Link
          to="/"
          className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Main
        </Link>
        {props.repositoryName && (
          <Link
            to={`/${props.userName}`}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Repositories
          </Link>
        )}
      </div>
    </nav>
  )
}

export default React.memo(Header)
