import Link from 'next/link'
import { signIn, signOut } from 'next-auth/client'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <h3 className='logo'>Authentication</h3>
      <nav>
        <Link href='/'>
          <a className='link'>Home</a>
        </Link>
        <Link href='/dashboard'>
          <a className='link'>Dashboard</a>
        </Link>
        <Link href='/blog/'>
          <a className='link'>Blog</a>
        </Link>
        <Link href='/api/auth/signin'>
        <a
            className='link'
            onClick={(e) => {
              e.preventDefault()
              signIn('github')
            }}
          >
            Sign in
          </a>
        </Link>
        <Link href='/api/auth/signout'>
          <a
            className='link'
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sign out
          </a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
