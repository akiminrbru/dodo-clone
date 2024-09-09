interface Props {
	src: string;
	className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src }) => {
	return <img className="w-[60px] h-[60px]" src={src} />;
};
