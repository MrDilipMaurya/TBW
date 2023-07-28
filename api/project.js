import { supabase } from '../supabase';

const getProjects = async () => {

    try {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('order', { ascending: true });

        if (error) {
            throw new Error(error.message);
        }

       data.filter((item)=>{
            item.project_image=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/hello/project/${item.project_image}`
        })
        return { data };
    } catch (error) {
        console.error('Error fetching Projects:', error);
        throw error;
    }
}



const createProjects = async (catdata, file = null) => {

    try {


        if (file) {
            const { outputPath, fileerror } = await supabase.storage
                .from('hello')
                .upload(`project/${file.name}`, file);


            if (fileerror) {
                throw new Error(fileerror.message);
            }
            catdata.project_image = file.name;
        }


        const { data, error } = await supabase
            .from('projects')
            .insert(catdata);


        if (error) {
            throw new Error(error.message);
        }

        return "Projects created successfully";

    } catch (error) {
        console.error('Error fetching Projects:', error);
        throw error;
    }

}



const updateProjects = async (id, catdata, file) => {
    try {

        if (file) {
            const { outputPath, fileerror } = await supabase.storage
                .from('hello')
                .upload(`project/${file.name}`, file);


            if (fileerror) {
                throw new Error(fileerror.message);
            }
            catdata.project_image = file.name;
        }
        const { data, error } = await supabase
            .from('projects')
            .update(catdata)
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "Projects updated successfully";

    } catch (error) {
        console.error('Error fetching Projects:', error);
        throw error;
    }
}




const editProjects = async (id) => {
    try {

        let { data, error } = await supabase
            .from('projects')
            .select("*")
            .eq('id', id)

        

        if (error) {
            throw new Error(error.message);
        }

        return { data };

    } catch (error) {
        console.error('Error fetching Projects:', error);
        throw error;
    }
}




const deleteProjects = async (id) => {
    try {

        const { data, error } = await supabase
            .from('projects')
            .delete()
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "Projects deleted successfully !"

    } catch (error) {
        console.error('Error fetching Projects:', error);
        throw error;
    }
}





module.exports = {
    getProjects: getProjects,
    createProjects: createProjects,
    updateProjects: updateProjects,
    editProjects: editProjects,
    deleteProjects: deleteProjects,

}