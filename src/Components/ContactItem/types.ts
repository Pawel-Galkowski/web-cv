export enum LinkType {
	MAIL = 'mailto:',
	PHONE = 'tel:',
}

export interface Props {
	icon: JSX.Element
	link?: string
	type?: LinkType
	name?: string
}
