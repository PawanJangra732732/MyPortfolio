import Link from "next/link"

export function Navbar1() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="text-lg font-bold" href="#">
          Portfolio
        </Link>
        <nav className="flex items-center gap-4">
          <Link className="text-sm font-medium hover:underline" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
