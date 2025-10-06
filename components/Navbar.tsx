'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navItems = [
		{ name: 'HOME', href: '/' },
		{ name: 'Courses', href: '/courses' },
		{ name: 'Leaderboard', href: '/leaderboard' },
		{ name: 'Community', href: '/community' },
	]

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0a1628]/95 to-[#1a237e]/95 backdrop-blur-md border-b border-white/10">
			<div className="max-w-6xl mx-auto px-5 py-4">
				{/* Desktop and Mobile Header */}
				<div className="flex items-center justify-center">
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							item.name === 'HOME' ? (
								<Link
									key={item.name}
									href={item.href}
									className={`text-white/90 font-light text-sm tracking-wider hover:text-white transition-colors ${
										pathname === item.href ? 'text-white' : ''
									}`}
								>
									{item.name}
								</Link>
							) : (
								<Link
									key={item.name}
									href={item.href}
									className={`px-5 py-1.5 rounded-full text-sm font-light border transition-all ${
										pathname === item.href
											? 'bg-white/20 text-white border-white/30'
											: 'bg-white/10 backdrop-blur text-white/80 border-white/20 hover:bg-white/20'
									}`}
								>
									{item.name}
								</Link>
							)
						))}
					</div>

					{/* Mobile Logo/Home */}
					<Link href="/" className="md:hidden text-white font-light text-sm tracking-wider">
						HOME
					</Link>

					{/* Hamburger Menu Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
						aria-label="Toggle menu"
					>
						<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
							isMenuOpen ? 'rotate-45 translate-y-2' : ''
						}`}></span>
						<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
							isMenuOpen ? 'opacity-0' : ''
						}`}></span>
						<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
							isMenuOpen ? '-rotate-45 -translate-y-2' : ''
						}`}></span>
					</button>
				</div>

				{/* Mobile Menu */}
				<div className={`md:hidden transition-all duration-300 overflow-hidden ${
					isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
				}`}>
					<div className="flex flex-col space-y-3 pb-2">
						{navItems.filter(item => item.name !== 'HOME').map((item) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={() => setIsMenuOpen(false)}
								className={`px-4 py-2 rounded-lg text-sm font-light border transition-all ${
									pathname === item.href
										? 'bg-white/20 text-white border-white/30'
										: 'bg-white/10 backdrop-blur text-white/80 border-white/20 active:bg-white/20'
								}`}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	)
}
