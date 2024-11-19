import { supabase } from "../supabase/supabaseClient";

export const userRepository = {
	findUserByEmail: async (email: string) => {
		const { data, error } = await supabase
			.from("users")
			.select("*")
			.eq("email", email)
			.single();

		if (error) return null;
		return data;
	},
	createUser: async (email: string, password: string) => {
		const { data, error } = await supabase
			.from("users")
			.insert([{ email, password }])
			.select()
			.single();

		if (error) throw new Error(error.message);
		return data;
	},
};
