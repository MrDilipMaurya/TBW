import { supabase } from "../supabase";

const login = async (email, password) => {
    try {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
            // email: 'dilip.kumar@taknikbharti.com',
            // password: 'Dilip@123',
        })

        if (error) {
            throw new Error(error.message);
        }


        return { status: 200, message: "User SignIn Successfully !" }
    } catch (error) {
        0
        console.error('Login error:', error);
        throw error;
    }
};


module.exports = {
    login: login,
}











