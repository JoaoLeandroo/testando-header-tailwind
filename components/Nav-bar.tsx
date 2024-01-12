'use client'

import { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {

  const [open, setOpen] = useState(true)

  function menu() {
    if(open === false) return setOpen(true)

    setOpen(false)
  }

  return (
    <header className="fixed w-full top-0 border-b border-slate-700">
      <Container>
        <div className="flex sm:justify-around h-full justify-between">
          <div>
            <Link className="font-semibold text-2xl" href={'/'} title="TheForce">TheForce</Link>
          </div>

          <nav className="flex items-center">
            {
              open === true ?
              <div>
                <Image
                  onClick={menu}
                  src={'/lista.png'}
                  width={35}
                  height={35}
                  alt="menu"
                  className="cursor-pointer block sm:hidden"
                /> 

                <ul className="sm:flex gap-3 h-full items-center flex-col sm:flex-row hidden">
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>About</Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Donate</Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Account</Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Contact</Link>
                  </li>
                </ul>

              </div>
                
                :
                <ul className="sm:flex gap-3 h-full items-center flex-col sm:flex-row">
                  <button onClick={menu} className="text-white text-5xl font-bold relative left-2">x</button>
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>About</Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Donate</Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Account</Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Contact</Link>
                  </li>
                </ul>
            }


          </nav>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
