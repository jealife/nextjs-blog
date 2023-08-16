'Use client'
import { useRouter } from 'next/router'
import Link from 'next/link'

function NavLink({ href, children }) {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link href={href}>
      <a className={isActive ? 'active' : ''}>{children}</a>
    </Link>
  )
}

export default NavLink
