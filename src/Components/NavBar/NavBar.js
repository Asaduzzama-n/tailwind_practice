import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const NavBar = () => {

    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 4, name: 'Product', link: '/product' },
        { id: 3, name: 'About', link: '/about' },
    ]

    const [open,setOpen] = useState(false);


    return (
        <nav className='bg-indigo-300 w-full'>
            <div onClick={()=>setOpen(!open)}  className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex md:static justify-center gap-10 duration-500 bg-indigo-300 w-full ease-in absolute ${open ? 'top-6' :'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;