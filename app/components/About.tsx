import { ImCalculator } from 'react-icons/im';
import { PiFileCloudBold } from 'react-icons/pi';
import { TbAutomation } from 'react-icons/tb';
import { FaPeopleCarry } from 'react-icons/fa';

export default function About() {
	return (
		<section id='about' className='about'>
			<div className='max-width'>
				<h2 className='h2'>About us</h2>
				<h3 className='h3'>Financial management services</h3>
				<p>
					We offer founders innovative financial insight, world class financial
					technology and peace of mind.
				</p>
				<div className='about-grid'>
					<div className='grid-item'>
						<ImCalculator color='red' size={50} />
						<div>
							<h3>CFO Services</h3>
							<p>
								The highly qualified finance expert you’ve always wanted to have
								on your advisory panel.
							</p>
						</div>
					</div>
					<div className='grid-item'>
						<PiFileCloudBold color='red' size={50} />

						<div>
							<h3>Cloud Accounting</h3>
							<p>
								An innovative accounting team to make sure that bookkeeping and
								reporting is done right.
							</p>
						</div>
					</div>
					<div className='grid-item'>
						<TbAutomation color='red' size={50} />
						<div>
							<h3>Automation Services</h3>
							<p>
								Make running your company a breeze – streamline operations and
								integrate leading cloud systems.
							</p>
						</div>
					</div>
					<div className='grid-item'>
						<FaPeopleCarry color='red' size={50} />
						<div>
							<h3>Talent Solutions</h3>
							<p>
								Interim and permanent finance talent to support your team
								through growth, transition, or key projects.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
