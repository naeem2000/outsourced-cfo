import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata: Metadata = {
	title: 'Outsourced CFO',
	description:
		'Building a world-class finance function for your growing company',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
