'use client';

import { Fade as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
export default function Nav() {
	return (
		<div className='nav'>
			<nav className='max-width '>
				<Image src='/images/logo.svg' alt='logo' width={130} height={40} />
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
				<div className='burger'>
					<Hamburger color='white' />
				</div>
			</nav>
			<AnimatePresence>
				<motion.div></motion.div>
			</AnimatePresence>
		</div>
	);
}
