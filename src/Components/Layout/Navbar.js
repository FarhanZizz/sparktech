import Link from "next/link";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  const menu = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      {session?.user ? (
        <li>
          <button onClick={() => signOut()}>Logout</button>
        </li>
      ) : (
        <li>
          <button onClick={() => signIn("google")}>Login</button>
        </li>
      )}

      <li tabIndex={0}>
        <details>
          <summary>Categories</summary>
          <ul className="w-48">
            <li>
              <Link href="/cpu">CPU / Processor</Link>
            </li>
            <li>
              <Link href="/motherboard">Motherboard</Link>
            </li>
            <li>
              <Link href="/ram">RAM</Link>
            </li>
            <li>
              <Link href="/psu">Power Supply Unit</Link>
            </li>
            <li>
              <Link href="/storage">Storage Device</Link>
            </li>
            <li>
              <Link href="/monitor">Monitor</Link>
            </li>
            <li>
              <Link href="/others">Others</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {menu}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          SparkTech
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-10">{menu}</ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/pc-builder"
          className="btn btn-outline rounded-nonebtn btn-xs sm:btn-sm md:btn-md  "
        >
          PC Builder
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
