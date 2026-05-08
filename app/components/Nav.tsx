'use client';

import { Fade as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import {
	FaArrowCircleUp,
	FaFacebookSquare,
	FaLinkedin,
	FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Nav() {
	const [isOpen, setOpen] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 100);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleClose = useCallback(() => {
		setOpen(false);
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
						<Link href='#testimonials'>Testimonials</Link>
					</li>
					<li>
						<Link href='#contact'>Contact</Link>
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
								<Link onClick={handleClose} href='#who-we-are'>
									Who we are
								</Link>
							</li>
							<li>
								<Link onClick={handleClose} href='#why-choose-us'>
									Why choose us?
								</Link>
							</li>
							<li>
								<Link onClick={handleClose} href='#testimonials'>
									Testimonials
								</Link>
							</li>
							<li>
								<Link onClick={handleClose} href='#contact'>
									Contact
								</Link>
							</li>
						</ul>
						<div className='socials'>
							<p className='socials-head'>Follow us:</p>
							<div className='socials-row'>
								<FaXTwitter color='red' size={25} />
								<FaFacebookSquare color='red' size={25} />
								<FaLinkedin color='red' size={25} />
								<FaYoutube color='red' size={33} />
								<AiFillInstagram color='red' size={30} />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			{scrolled && (
				<Link href='#body' className='scroll-top'>
					<FaArrowCircleUp size={30} />
				</Link>
			)}
		</div>
	);
}
