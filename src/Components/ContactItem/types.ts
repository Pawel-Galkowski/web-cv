export enum LinkTypeEnum {
	MAIL = 'mailto:',
	PHONE = 'tel:',
}

export interface Props {
	icon: JSX.Element
	link?: string
	type?: LinkTypeEnum
	name?: string
}
