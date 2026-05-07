import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import 'swiper/css/scrollbar';
import 'swiper/css';

export default function Testimonials() {
	return (
		<section className='testimonials'>
			<div className='max-width'>
				<h2 className='h2'>Testimonials</h2>
				<h3 className='h3'>Entrepreneurs change the world.</h3>
				<p className='p'>
					They create growth, job opportunities and social impact. Hundreds of
					founders and management teams tap into the expertise of their trusted
					finance and accounting partner to help scale their companies.
				</p>

				<Swiper
					modules={[Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					navigation
					pagination
					draggable
					breakpoints={{
						1024: {
							slidesPerView: 2,
						},
					}}
					className='slides'
				>
					<SwiperSlide className='slide'>
						<Image
							src='/testimonials/yvonne-testimonial.webp'
							width={80}
							height={80}
							alt='Yvonne Wakefield'
							className='image'
						/>
						<p className='name'>Yvonne Wakefield</p>
						<p className='occupation'>Founder - Caveat Legal</p>
						<p className='review'>
							“Would we recommend Outsourced CFO? Yes! They have just gone from
							strength to strength and are just absolutely nailing it out there.
							All founders need a go-to finance expert.”
						</p>
					</SwiperSlide>
					<SwiperSlide className='slide'>
						<Image
							src='/testimonials/aidan-testimonial.webp'
							width={80}
							height={80}
							alt='Yvonne Wakefield'
							className='image'
						/>
						<p className='name'>Aidan Casserly</p>
						<p className='occupation'>
							Founder - Castle Rock Managed IT Services
						</p>
						<p className='review'>
							“We moved over to Outsourced CFO from a small bookkeeping company
							as we started to scale. We needed a larger partner as we grew. Our
							needs were more complex.”
						</p>
					</SwiperSlide>
					<SwiperSlide className='slide'>
						<Image
							src='/testimonials/Tim-Molteno-MD-of-Intembeko.webp'
							width={80}
							height={80}
							alt='Yvonne Wakefield'
							className='image'
						/>
						<p className='name'>Tim Molteno</p>
						<p className='occupation'>
							Founder - Intembeko Investment Administrators
						</p>
						<p className='review'>
							“We have gained insight into our new business and were able to
							implement best of breed systems combined with best practise
							processes.”
						</p>
					</SwiperSlide>
					<SwiperSlide className='slide'>
						<Image
							src='/images/blank.png'
							width={80}
							height={80}
							alt='Yvonne Wakefield'
							className='image'
						/>
						<p className='name'>Lauren Hockey</p>
						<p className='occupation'>Director - The Honeycomb Group</p>
						<p className='review'>
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.”
						</p>
					</SwiperSlide>
					<SwiperSlide className='slide'>
						<Image
							src='/images/blank.png'
							width={80}
							height={80}
							alt='Yvonne Wakefield'
							className='image'
						/>
						<p className='name'>Cassandra Harding</p>
						<p className='occupation'>Director - The Honeycomb Group</p>
						<p className='review'>
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.”
						</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
