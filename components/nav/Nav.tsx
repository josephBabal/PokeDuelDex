"use client"
import styles from './nav.module.scss'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VscAccount } from "react-icons/vsc"
import { VscChromeClose } from "react-icons/vsc"
import { VscMenu } from "react-icons/vsc"
import { usePathname } from 'next/navigation'
import useStore from '@/zustand/store'
import { useRouter } from 'next/navigation'

const Nav = () => {
  const router = useRouter()

  const { userEmail, setUserEmail, setBearerToken, getUserEmail } = useStore()

  const currentPage = usePathname();

  const hideNav = currentPage === '/signup' || currentPage === '/login';

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    console.log(" user: ", userEmail)
    if (userEmail === "") {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
    setToggleDropdown(false)
  }, [userEmail]);

  const closeDropdown = () => {
    setToggleDropdown(false);
  }

  const handleSignOut = () => {
    console.log("== user signed out");
    setUserEmail("");
    setBearerToken("");
    setIsLoggedIn(false);

    router.refresh();
  }
  return (
    <>
    {!hideNav && (
    <nav className={styles.nav}>
      <Link href="/">
        <h2> PokeDuelDex </h2>
      </Link>

      {/* Desktop Navigation */}
      {/* <div className={styles.desktop}>
      {isLoggedIn ? (
        <div className={`${styles.container}`}>
          <Link href="/" className="outline_btn_pill me-5"> Duel </Link>
          <div className={styles.icon} onClick={() => setToggleDropdown(!toggleDropdown)}>
            {toggleDropdown ? <VscChromeClose /> : <VscAccount />}
          </div>

          {toggleDropdown && (
            <div className={styles.dropdown}>
              <Link href="/" className={styles.dropdown_link} > My Profile </Link>
              <Link href="/" className={styles.dropdown_link} onClick={handleSignOut}> Sign Out </Link>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.container}>
          <Link href="/signup" className="outline_btn_square"> Sign up  </Link>
          <Link href="/login" className="outline_btn_square_bg" onClick={closeDropdown}> Login </Link>

        </div>
      )}
      </div> */}

      {/* mobile Navigation */}
      {/* <div className={styles.mobile}>
      {isLoggedIn ? (
        <div className={`${styles.container}`}>
          <div className={styles.icon} onClick={() => setToggleDropdown(!toggleDropdown)}>
            {toggleDropdown ? <VscChromeClose /> : <VscAccount />}
          </div>
          {toggleDropdown && (
            <div className={styles.dropdown}>
              <Link href="/" className={styles.dropdown_link}> My Profile </Link>
              <Link href="/" className={styles.dropdown_link}> Duel </Link>
              <Link href="/" className={styles.dropdown_link} onClick={handleSignOut}> Sign Out </Link>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.icon} onClick={() => setToggleDropdown(!toggleDropdown)}>
            {toggleDropdown ? <VscChromeClose /> : <VscMenu />}
          </div>
          {toggleDropdown && (
            <div className={styles.dropdown}>
              <Link href="/signup" className={styles.dropdown_link}> Sign up  </Link>
              <Link href="/login" className={styles.dropdown_link}> Login </Link>
            </div>
          )}
        </div>
      )}
      </div> */}
    
    </nav> )}
    </>
  )

}

export default Nav