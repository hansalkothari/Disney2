import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'
import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";


const Header = () => {
  return (
    <header className='fixed w-full z-20 top-0 items-center flex justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
        <Link className='mr-10' href='/'>
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer invert-0 dark:invert"}
        />
        </Link>
        <div className="flex space-x-2">
            <GenreDropdown/>
            <SearchInput />
            <ThemeToggler/>
        </div>
    </header>
  )
}

export default Header