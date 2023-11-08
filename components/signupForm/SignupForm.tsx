"use client"

import styles from '@/styles/authForms.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignupForm = () => {
  const router = useRouter()
  const [formFields, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isAccountTaken, setIsAccountTaken] = useState(false)


  const handleChange = (e: any) => {
    const { name, value } = e.target

    if (isAccountTaken) {
      setIsAccountTaken(false);
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({
          username: formFields.username,
          email: formFields.email,
          password: formFields.password
        })
      });

      if (response.ok) {
        console.log("==response", response);
        router.push('/');
      }

      if (response.status == 409  ) {
        setIsAccountTaken(true);
        return;
      }
      
    } catch (error) {
      console.log(error);
      setIsAccountTaken(true);
      return;
    } 
  }

  return (
    <div className={styles.container}> 
      <h2> Sign Up! </h2>
      {/* {isAccountTaken && <p className="m-0 p-0"> Username or Email taken or invalid </p>} */}

      <p className={isAccountTaken ? "invalid-red opacity-1" : "opacity-0"}> Username or Email taken or invalid </p>
      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <div className="flex-column">
          <label>  Username </label>
          <input 
            className={`${isAccountTaken && "outline-red"}`}
            name="username"
            placeholder="Enter a username"
            required
            onChange={handleChange}
          />
        </div>

        <div className="flex-column">
          <label> Email </label>   
          <input 
            className={`${isAccountTaken && "outline-red"}`}
            name="email"
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />
        </div>
        
        <div className="flex-column">
          <label> Password </label>   
          <input 
            className={`${isAccountTaken && "outline-red"}`}
            name="password"
            placeholder="Create a Password"
            type="password"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.btn_container}> 
          <button type="submit"> Sign Up </button>
        </div>
        <div>
          <p> Already have an account? <span className="link-underline"> <Link href="/login"> Log in </Link> </span></p>
        </div>
      </form>
    </div>
  )
}

export default SignupForm