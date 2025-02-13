// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Planarity Enterprises | Innovate. Build. Elevate.',
	siteDescription:
		'At Planarity Enterprises, we don’t just develop software—we craft digital experiences that redefine industries. From concept to execution, our end-to-end software development solutions empower businesses to innovate, scale, and thrive in an ever-evolving digital landscape.',
	ogImage: '/og.jpg',
	logo: {
		src: '/long_logo.svg',
		alt: 'Planarity Enterprises logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
