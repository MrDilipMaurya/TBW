import { supabase } from '../supabase';

const getProjectUnderProjectCategory = async (projectCategory) => {

    try {
        let { data, error } = await supabase
            .from('projects')
            .select("*")
            .eq('project_category', projectCategory)

        if (error) {
            throw new Error(error.message);
        }

        data.filter((item) => {
            item.project_image = `https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/hello/project/${item.project_image}`
        })
        return { data };
    } catch (error) {
        console.error('Error fetching Projects:', error);
        throw error;
    }
}


module.exports = {
    getProjectUnderProjectCategory: getProjectUnderProjectCategory,


}