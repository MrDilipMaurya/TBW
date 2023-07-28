import { supabase } from '../supabase';

const getReviews = async () => {

    try {
        const { data, error } = await supabase
            .from('reviews')
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        data.filter((item) => {
            if (item.image != null) {
                item.image = `https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/hello/reviews/${item.image}`

            }
        })
        return { data };
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
}



const createReviews = async (catdata, image = null) => {
    try {

        catdata.image = null;
        if (image) {
            const { outputPath, fileerror } = await supabase.storage
                .from('hello')
                .upload(`reviews/${image.name}`,image);


            if (fileerror) {
                throw new Error(fileerror.message);
            }
            catdata.image = image.name;
        }
        const { data, error } = await supabase
            .from('reviews')
            .insert(catdata);

        if (error) {
            throw new Error(error.message);
        }

        return "reviews created successfully";
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }


}



const updateReviews = async (id, catdata, image = null) => {
    try {

        catdata.image = null;
        if (image) {
            const { outputPath, fileerror } = await supabase.storage
                .from('hello')
                .upload(`reviews/${image.name}`, image);


            if (fileerror) {
                throw new Error(fileerror.message);
            }
            catdata.image = image.name;
        }
        const { data, error } = await supabase
            .from('reviews')
            .update(catdata)
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "reviews updated successfully";

    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
}




const editReviews = async (id) => {
    try {

        let { data, error } = await supabase
            .from('reviews')
            .select("*")

            // Filters
            .eq('id', id)

        if (error) {
            throw new Error(error.message);
        }

        return { data };

    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
}




const deleteReviews = async (id) => {
    try {

        const { data, error } = await supabase
            .from('reviews')
            .delete()
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "reviews deleted successfully !"

    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
}





module.exports = {
    getReviews: getReviews,
    createReviews: createReviews,
    updateReviews: updateReviews,
    editReviews: editReviews,
    deleteReviews: deleteReviews,

}