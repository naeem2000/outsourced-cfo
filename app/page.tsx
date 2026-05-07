'use client';

import About from './components/About';
import Contact from './components/Contact';
import FocusAreas from './components/FocusAreas';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import './page.css';

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<FocusAreas />
			<Testimonials />
			<Contact />
		</main>
	);
}
