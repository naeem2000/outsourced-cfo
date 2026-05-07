'use client';

import About from './components/About';
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
		</main>
	);
}
