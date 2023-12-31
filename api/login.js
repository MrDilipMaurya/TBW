import { supabase } from "../supabase";
const login = async (email, password) => {
    try {      
        const { data, error } = await supabase.auth.signInWithPassword({
            email:email,
            password:password
        })

        if (error) {
            throw new Error(error.message);
        }
        return {status:200,message:"User SignIn Successfully !"}
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

module.exports = {
    login: login,    
}