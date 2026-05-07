import Image from 'next/image';

export default function FocusAreas() {
	return (
		<section id='why-choose-us' className='focus-areas'>
			<div className='max-width'>
				<h2 className='h2'>Why choose us?</h2>
				<h3 className='h3'>Specialized industries</h3>
				<p className='p'>
					With many decades worth of combined experience, our team is able to
					assist companies in any industry or phase of development. We do
					however have in-depth experience with high-growth companies in the
					following arenas:
				</p>

				<div className='areas'>
					<div className='area'>
						<Image
							src='/images/creative-industries.svg'
							width={50}
							height={50}
							alt='Creative Industries and Agencies'
						/>
						Creative Industries and Agencies
					</div>
					<div className='area'>
						<Image
							src='/images/medical-technology-healthcare.svg'
							width={50}
							height={50}
							alt='Medical Technology and Healthcare'
						/>
						Medical Technology and Healthcare
					</div>
					<div className='area'>
						<Image
							src='/images/saas-software-development.svg'
							width={50}
							height={50}
							alt='Software Development and SAAS'
						/>
						Software Development and SAAS
					</div>
					<div className='area'>
						<Image
							src='/images/manufacturing-ecommerce.svg'
							width={50}
							height={50}
							alt='Manufacturing and E-Commerce'
						/>
						Manufacturing and E-Commerce
					</div>
					<div className='area'>
						<Image
							src='/images/venture-capital.svg'
							width={50}
							height={50}
							alt='Venture Capital and Venture Accelerators'
						/>
						Venture Capital and Venture Accelerators
					</div>
					<div className='area'>
						<Image
							src='/images/professional-commercial-services.svg'
							width={50}
							height={50}
							alt='Professional and Commercial Services'
						/>
						Professional and Commercial Services
					</div>
					<div className='area'>
						<Image
							src='/images/outsourced-cfo-financial-services-icon.svg'
							width={50}
							height={50}
							alt='Financial Services and Fintech'
						/>
						Financial Services and Fintech
					</div>
					<div className='area'>
						<Image
							src='/images/education-edtech.svg'
							width={50}
							height={50}
							alt='Education and EdTech'
						/>
						Education and EdTech
					</div>
					<div className='area'>
						<Image
							src='/images/telecommunications.svg'
							width={50}
							height={50}
							alt='Telecommunications'
						/>
						Telecommunications
					</div>
					<div className='area'>
						<Image
							src='/images/blockchain-crypto.svg'
							width={50}
							height={50}
							alt='Blockchain and Crypto'
						/>
						Blockchain and Crypto
					</div>
					<div className='area'>
						<Image
							src='/images/disruptive-technology.svg'
							width={50}
							height={50}
							alt='Disruptive Technology and Startups'
						/>
						Disruptive Technology and Startups
					</div>
					<div className='area'>
						<Image
							src='/images/green-energy.svg'
							width={50}
							height={50}
							alt='Green Energy and Impact Ventures'
						/>
						Green Energy and Impact Ventures
					</div>
				</div>
			</div>
		</section>
	);
}
