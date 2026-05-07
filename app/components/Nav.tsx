'use client';

import { Fade as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
	const [isOpen, setOpen] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={`nav ${scrolled ? 'scrolled' : ''}`}>
			<nav className='max-width '>
				<Image src='/images/logo.svg' alt='logo' width={130} height={40} />
				<ul>
					<li>
						<Link href='#who-we-are'>Who we are</Link>
					</li>
					<li>
						<Link href='#why-choose-us'>Why choose us?</Link>
					</li>
					<li>
						<Link href='#hero'>Testimonials</Link>
					</li>
					<li>
						<Link href='#hero'>Contact</Link>
					</li>
				</ul>
				<div className='burger'>
					<Hamburger
						toggled={isOpen}
						toggle={() => setOpen(!isOpen)}
						size={30}
						color='red'
					/>
				</div>
			</nav>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ duration: 0.3 }}
						className='mobile-nav'
					>
						<ul>
							<li>
								<Link href='#hero'>About</Link>
							</li>
							<li>
								<Link href='#hero'>Services</Link>
							</li>
							<li>
								<Link href='#hero'>Reviews</Link>
							</li>
							<li>
								<Link href='#hero'>Contact</Link>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
			{/* {scrolled && <div>scroll to top</div>} */}
		</div>
	);
}
