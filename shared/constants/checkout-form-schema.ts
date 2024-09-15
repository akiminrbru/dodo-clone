import { z } from "zod";

export const checkoutFormSchema = z.object({
	firstName: z.string().min(2, { message: "Имя должно содеражть минимум 2 символа" }),
	lastName: z.string().min(2, { message: "Фамилия должна содеражть минимум 2 символа" }),
	email: z.string().email({ message: "Введите корректный email" }),
	phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
	address: z.string().min(5, { message: "Введите корректный адрес" }),
	comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
