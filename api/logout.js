import { supabase } from "../supabase";

const logout = async () => {
    try {

        const { error } = await supabase.auth.signOut()

        if (error) {
            throw new Error(error.message);
        }
        return "User SignOut SuccessFully!"

    } catch (error) {
        0
        console.error('Login error:', error);
        throw error;
    }
};

module.exports = {
    logout: logout,
}
    