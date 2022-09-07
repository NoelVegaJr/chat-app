import React from 'react'

const SearchBar = () => {
  return (

      <form className="w-1/2 h-8 rounded-md bg-slate-400 ">
        <input placeholder="Search Testing" type="text" className="w-full h-full p-2 bg-transparent outline-none placeholder-slate-100"/>
      </form>
  )
}

const Header = ({className}) => {
  return (
    <div className={`bg-slate-900 ${className} flex items-center justify-center p-6 `}>
      <SearchBar />
    </div>
  )
}

export default Header