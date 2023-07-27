import { supabase } from '../supabase';

const getProjectCategory = async () => {
 


    try {
        const { data, error } = await supabase
            .from('project_category')
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        return { data };
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }

}
const createProjectCategory = async (catdata) => {



    try {

        const { data, error } = await supabase
            .from('project_category')
            .insert(catdata);

        if (error) {
            throw new Error(error.message);
        }

        return "Project category created successfully";
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }

}
const updateProjectCategory = async (id, catdata) => {



    try {

        const { data, error } = await supabase
            .from('project_category')
            .update(catdata)
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "Project category updated successfully";

    } catch (error) {
        console.error('Error fetching project category:', error);
        throw error;
    }

}
const editProjectCategory = async (id) => {



    try {

        let { data, error } = await supabase
            .from('project_category')
            .select("*")
            .eq('id', id)

          

        if (error) {
            throw new Error(error.message);
        }

        return { data };

    } catch (error) {
        console.error('Error fetching project category:', error);
        throw error;
    }

}
const deleteProjectCategory = async (id) => {



    try {

        const { data, error } = await supabase
            .from('project_category')
            .delete()
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "Project category deleted successfully !"

    } catch (error) {
        console.error('Error fetching project category:', error);
        throw error;
    }

}

module.exports = {
    getProjectCategory: getProjectCategory,
    createProjectCategory: createProjectCategory,
    updateProjectCategory: updateProjectCategory,
    editProjectCategory: editProjectCategory,
    deleteProjectCategory: deleteProjectCategory,

}