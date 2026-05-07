import Link from 'next/link';
import { FaArrowCircleDown } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';

export default function Hero() {
	return (
		<section className='hero'>
			<div className='max-width'>
				<div className='hero-content'>
					<h1>
						Building a world-class finance function for your growing company
					</h1>
					<p>
						Scaling up is complex. Simplify it with CFO, cloud accounting,
						talent solutions and automation expertise.
					</p>
					<div className='buttons'>
						<Link href='#about'>
							<button className='button-red'>
								Learn more <FaArrowCircleDown />
							</button>
						</Link>
						<Link href='#contact'>
							<button className='button-red'>
								Book a call <IoMdCall />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
