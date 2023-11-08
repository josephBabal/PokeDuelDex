"use client"
import styles from '@/styles/authForms.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useStore from '@/zustand/store'

const LoginForm = () => {
  const { setUserEmail, setBearerToken, getUserEmail, getBearerToken } = useStore()
  const router = useRouter()
  const [formFields, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const handleChange = (e: any) => {
    const { name, value } = e.target

    if (isLoggedIn) {
      setIsLoggedIn(false);
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
      email: formFields.email,
      password: formFields.password
      })
    });

    const resBody = await response.json()

    if (response.status == 200) {
      console.log("==token response", resBody);
      // console.log("== successful auth, token:", resBody.token)
            // console.log("== document.cookie:", document.cookie)
      setUserEmail(formFields.email)
      setBearerToken(resBody)
      router.push('/');
      router.refresh();
    }

    if (response.status == 401  ) {
      setIsLoggedIn(true);
      return;
    }
    
    } catch (error) {
      console.log(error);
      setIsLoggedIn(true);
      return;
    } 
  }

  // console.log("user login info", getUserEmail, getBearerToken)
  // console.log("user login info", useStore((state: any) => state.userEmail), useStore((state: any) => state.bearerToken))

  return (
    <div className={styles.container}> 
      <h2> Login Up! </h2>

      <p className={isLoggedIn ? "invalid-red opacity-1" : "opacity-0"}> Invalid email or password </p>
      
      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <div className="flex-column">
          <label> Email </label>   
          <input 
            className={`${isLoggedIn && "outline-red"}`}
            name="email"
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />
        </div>
        
        <div className="flex-column">
          <label> Password </label>   
          <input 
            className={`${isLoggedIn && "outline-red"}`}
            name="password"
            placeholder="Create a Password"
            type="password"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.btn_container}> 
          <button type="submit"> Login </button>
        </div>

        <div>
          <p> Don't have an account? <span className="link-underline"> <Link href="/signup"> Create account </Link> </span> </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm