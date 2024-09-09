interface Props {
	value: number;
	className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value }) => {
	return <h2 className="font-bold">{value} ₽</h2>;
};
