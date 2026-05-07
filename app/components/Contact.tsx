import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Contact() {
	return (
		<section className='contact'>
			<div className='max-width'>
				<div className='contact-body'>
					<div className='left'>
						<h2 className='h2'>Get in Touch</h2>
						<h3 className='h3'>Let’s discuss your financial goals</h3>

						<p className='p'>
							Whether you need strategic financial guidance, outsourced CFO
							services, or support scaling your business, our team is ready to
							help. Complete the form on the right and we’ll get back to you
							shortly.
						</p>

						<p className='p'>Or get in touch with us directly:</p>

						<div className='links'>
							<div>
								<HiOutlineMail color='red' size={25} />
								<Link href='mailto:info@ocfo.com'>info@ocfo.com</Link>
							</div>
							<div className='cities'>
								<div>
									<p className='city'>Cape Town Office</p>
									<div className='text-icon'>
										<FaLocationDot color='red' size={25} />
										<p>
											5th Floor Vunani Chambers 33 Church Street Cape Town City
											Centre Cape Town 8000
										</p>
									</div>

									<div className='text-icon'>
										<IoCall color='red' size={25} />
										<Link href='tel:+27212012260'>+27 (0) 21 201 2260</Link>
									</div>
								</div>

								<div>
									<p className='city'>New York Office</p>

									<div className='text-icon'>
										<FaLocationDot color='red' size={25} />
										<p>
											260 Madison Avenue <br /> New York City NY <br /> 10016
											USA
										</p>
									</div>

									<div className='text-icon'>
										<IoCall color='red' size={25} />
										<Link href='tel:+19292519291'>+1 929 251 9291</Link>
									</div>
								</div>
							</div>

							<div className='socials'>
								<p className='socials-head'>Socials</p>
								<div className='socials-row'>
									<FaXTwitter color='red' size={25} />
									<FaFacebookSquare color='red' size={25} />
									<FaLinkedin color='red' size={25} />
									<FaYoutube color='red' size={33} />
									<AiFillInstagram color='red' size={30} />
								</div>
							</div>
						</div>
					</div>
					<div className='right'>
						<TextField label='Name' size='small' fullWidth variant='outlined' />
						<TextField
							label='Email'
							size='small'
							fullWidth
							variant='outlined'
						/>

						<TextField
							label='Message'
							multiline
							rows={5}
							size='small'
							fullWidth
							variant='outlined'
						/>
						<button className='button-red'>Send Message</button>
					</div>
				</div>
			</div>
		</section>
	);
}
