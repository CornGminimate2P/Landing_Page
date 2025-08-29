'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const pathname = usePathname()

	const navItems = [
		{ name: 'HOME', href: '/' },
		{ name: 'Courses', href: '/courses' },
		{ name: 'Leaderboard', href: '/leaderboard' },
		{ name: 'Community', href: '/community' },
	]

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0a1628]/95 to-[#1a237e]/95 backdrop-blur-md border-b border-white/10">
			<div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
				<div className="flex items-center gap-8">
					{navItems.map((item) => (
						item.name === 'HOME' ? (
							<Link
								key={item.name}
								href={item.href}
								className={`text-white/90 font-light text-sm tracking-wider hover:text-white transition-colors ${pathname === item.href ? 'text-white' : ''
									}`}
							>
								{item.name}
							</Link>
						) : (
							<Link
								key={item.name}
								href={item.href}
								className={`px-5 py-1.5 rounded-full text-sm font-light border transition-all ${pathname === item.href
										? 'bg-white/20 text-white border-white/30'
										: 'bg-white/10 backdrop-blur text-white/80 border-white/20 hover:bg-white/20'
									}`}
							>
								{item.name}
							</Link>
						)
					))}
				</div>
			</div>
		</nav>
	)
}
