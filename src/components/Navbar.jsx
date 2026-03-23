import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Detect active section
            const sections = ['home', 'about', 'safety', 'certificates', 'recommendations', 'preparations', 'contact']
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { title: 'דף הבית', href: '#home', id: 'home' },
        { title: 'אודות', href: '#about', id: 'about' },
        { title: 'בטיחות', href: '#safety', id: 'safety' },
        { title: 'תעודות והסמכות', href: '#certificates', id: 'certificates' },
        { title: 'המלצות', href: '#recommendations', id: 'recommendations' },
        { title: 'הכנות לברית', href: '#preparations', id: 'preparations' },
        { title: 'צרו קשר', href: '#contact', id: 'contact' }
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Mobile Toggle */}
                <button
                    className={`menu-toggle ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Links */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className={activeSection === link.id ? 'nav-active' : ''}
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
