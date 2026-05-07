import Nav from './Nav';

export default function Hero() {
	return (
		<div className='hero'>
			<div className='max-width'>
				<Nav />
				<div className='hero-content'>
					<h1>
						Building a world-class finance function for your growing company
					</h1>
					<p>
						Scaling up is complex. Simplify it with CFO, cloud accounting,
						talent solutions and automation expertise.
					</p>
				</div>
			</div>
		</div>
	);
}
