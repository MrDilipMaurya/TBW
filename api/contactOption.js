import { supabase } from '../supabase';

const getContactOption = async () => {
   


    try {
        const { data, error } = await supabase
            .from('contact_option')
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        return { data };
    } catch (error) {
        console.error('Error fetching contact option:', error);
        throw error;
    }

}
const createContactOption = async (catdata) => {



    try {

        const { data, error } = await supabase
            .from('contact_option')
            .insert(catdata);

        if (error) {
            throw new Error(error.message);
        }

        return "contact option created successfully";
    } catch (error) {
        console.error('Error fetching contact option:', error);
        throw error;
    }

}
const updateContactOption = async (id, catdata) => {



    try {

        const { data, error } = await supabase
            .from('contact_option')
            .update(catdata)
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "contact option updated successfully";

    } catch (error) {
        console.error('Error fetching contact option:', error);
        throw error;
    }

}
const editContactOption = async (id) => {



    try {

        let { data, error } = await supabase
            .from('contact_option')
            .select("*")

            
            .eq('id', id)

        if (error) {
            throw new Error(error.message);
        }

        return { data };

    } catch (error) {
        console.error('Error fetching contact option:', error);
        throw error;
    }

}
const deleteContactOption = async (id) => {



    try {

        const { data, error } = await supabase
            .from('contact_option')
            .delete()
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "contact option deleted successfully !"

    } catch (error) {
        console.error('Error fetching contact option:', error);
        throw error;
    }

}

module.exports = {
    getContactOption: getContactOption,
    createContactOption: createContactOption,
    updateContactOption: updateContactOption,
    editContactOption: editContactOption,
    deleteContactOption: deleteContactOption,

}