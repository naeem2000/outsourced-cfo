import Image from 'next/image';

export default function Footer() {
	return (
		<footer>
			<div className='max-width'>
				<div className='footer-body'>
					<div className='left'>
						<Image
							src='/images/logo-white.svg'
							alt='logo'
							width={130}
							height={40}
						/>

						<p>
							© Outsourced CFO 2026 | Privacy Policy | Legal | US Legal | PAIA |
							FHT Legal
						</p>
					</div>
					<div className='right'>
						<Image
							src='/images/saica-logo.png'
							alt='logo'
							width={160}
							height={75}
						/>
						<Image
							src='/images/sa-accountants-logo.png'
							alt='logo'
							width={160}
							height={75}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
