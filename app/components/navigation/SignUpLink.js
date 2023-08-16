import Link from 'next/link'

export default function SignUpLink({ setisAuth }) {
  const handleClick = (e) => {
    e.preventDefault()
    setisAuth(true)
  }

  return (
    <Link href='/login' className='btn_link' onClick={handleClick}>Sign in
    </Link>
  )
}
