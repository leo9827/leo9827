import Container from './container'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-neutral-50 border-t border-neutral-50">
      <Container>
        <div className="flex items-center justify-center py-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-3">|</span>
          <Link href="/" className="hover:underline">
            Posts
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header