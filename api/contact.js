import { supabase } from '../supabase';

const getContacts = async () => {
   


    try {
        const { data, error } = await supabase
            .from('contacts')
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        return { data };
    } catch (error) {
        console.error('Error fetching contact :', error);
        throw error;
    }

}
const createContacts = async (catdata) => {



    try {

        const { data, error } = await supabase
            .from('contacts')
            .insert(catdata);

        if (error) {
            throw new Error(error.message);
        }

        return {status:200,message:"contact  created successfully"};
    } catch (error) {
        console.error('Error fetching contact :', error);
        throw error;
    }

}
const updateContacts = async (id, catdata) => {



    try {

        const { data, error } = await supabase
            .from('contacts')
            .update(catdata)
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "contact  updated successfully";

    } catch (error) {
        console.error('Error fetching contact:', error);
        throw error;
    }

}
const editContacts = async (id) => {



    try {

        let { data, error } = await supabase
            .from('contacts')
            .select("*")
            .eq('id', id)

      

        if (error) {
            throw new Error(error.message);
        }

        return { data };

    } catch (error) {
        console.error('Error fetching contact:', error);
        throw error;
    }

}
const deleteContacts = async (id) => {



    try {

        const { data, error } = await supabase
            .from('contacts')
            .delete()
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "contact  deleted successfully !"

    } catch (error) {
        console.error('Error fetching contact :', error);
        throw error;
    }

}

module.exports = {
    getContacts: getContacts,
    createContacts: createContacts,
    updateContacts: updateContacts,
    editContacts: editContacts,
    deleteContacts: deleteContacts,

}