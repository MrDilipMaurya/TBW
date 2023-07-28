import { supabase } from '../supabase';

const getIsContactReview = async () => {

    try {
        const { data, error } = await supabase
            .from('reviews')
            .select('*')
            .eq('is_contact_review','true');

            data.filter((item) => {
                if (item.image != null) {
                    item.image = `https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/hello/reviews/${item.image}`
                }
            })
        if (error) {
            throw new Error(error.message);
        }

        return { data };
    } catch (error) {
        
        throw error;
    }
}










module.exports = {
    getIsContactReview: getIsContactReview,
    

}