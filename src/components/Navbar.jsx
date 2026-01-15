import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { title: 'דף הבית', href: '#home' },
        { title: 'אודות', href: '#about' },
        { title: 'בטיחות', href: '#safety' },
        { title: 'תעודות והסמכות', href: '#certificates' },
        { title: 'המלצות', href: '#recommendations' },
        { title: 'הכנות לברית', href: '#preparations' },
        { title: 'צרו קשר', href: '#contact' }
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">


                {/* Mobile Toggle */}
                <button
                    className="menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </button>

                {/* Links */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
