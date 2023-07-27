import { supabase } from '../supabase';

const getServices = async () => {

    try {
        const { data, error } = await supabase
            .from('services')
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        return { data };
    } catch (error) {
        
        throw error;
    }
}



const createServices = async (catdata) => {
    try {

        const { data, error } = await supabase
            .from('services')
            .insert(catdata);

        if (error) {
            throw new Error(error.message);
        
        }

        return "Services created successfully";
    } catch (error) {
            return "User not Authenticated !"

        return "User not Authenticated !"
        throw error;
    }

    
}



const updateServices = async (id, catdata) => {
    try {

        const { data, error } = await supabase
            .from('services')
            .update(catdata)
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "Services updated successfully";

    } catch (error) {
        return "User not Authenticated !"
      
        throw error;
    }
}




const editServices = async (id) => {
    try {

        let { data, error } = await supabase
            .from('services')
            .select("*")

            // Filters
            .eq('id', id)

        if (error) {
            throw new Error(error.message);
        }

        return { data };

    } catch (error) {
        return "User not Authenticated !"
        throw error;
    }
}




const deleteServices = async (id) => {
    try {

        const { data, error } = await supabase
            .from('services')
            .delete()
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "Services deleted successfully !"

    } catch (error) {
        return "User not Authenticated !"
        throw error;
    }
}





module.exports = {
    getServices: getServices,
    createServices: createServices,
    updateServices: updateServices,
    editServices: editServices,
    deleteServices: deleteServices,

}