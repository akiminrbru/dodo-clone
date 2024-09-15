"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
	onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
	return (
		<AddressSuggestions
			token="5b17052cf60031f7bb79f1379c8d248e00ee225e"
			onChange={(data) => onChange?.(data?.value)}
		/>
	);
};
