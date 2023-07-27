import { supabase } from '../supabase';

const getCaseStudies = async () => {



    try {
        const { data, error } = await supabase
            .from('case_studies')
            .select('*')
            .order('order', { ascending: true });
            

        if (error) {
            throw new Error(error.message);
        }

        data.filter((item)=>{
            if(item.banner_image){
                item.banner_image=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/tbw_storage/case_studies/${item.banner_image}`
            }
            if(item.banner_image_logo){
                item.banner_image_logo=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/tbw_storage/case_studies/${item.banner_image_logo}`
            }
            if(item.middle_banner){
                item.middle_banner=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/tbw_storage/case_studies/${item.middle_banner}`
            }
            if(item.thumbnail){
                item.thumbnail=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/tbw_storage/case_studies/${item.thumbnail}`
            }

        })
        return { data };
    } catch (error) {
        console.error('Error fetching case studies :', error);
        throw error;
    }

}
const createCaseStudies = async (catdata,banner_image=null,banner_image_logo=null,middle_banner=null,thumbnail=null) => {



    try {
        catdata.banner_image=null;
        catdata.banner_image_logo=null;
        catdata.middle_banner=null;
        catdata.thumbnail=null;
        if(banner_image){
            const { banner_image_data, error } = await supabase.storage.from('tb_storage').upload(`case_studies/${banner_image.name}`, banner_image);
             catdata.banner_image=banner_image.name
        }
        if(banner_image_logo){
            const { banner_image_logo_data, error } = await supabase.storage.from('tb_storage').upload(`case_studies/${banner_image_logo.name}`, banner_image_logo);
             catdata.banner_image_logo=banner_image_logo.name
        }
        if(middle_banner){
            const { middle_banner_data, error } = await supabase.storage.from('tb_storage').upload(`case_studies/${middle_banner.name}`, middle_banner);
             catdata.middle_banner=middle_banner.name
        }
        if(thumbnail){
            const { thumbnail, error } = await supabase.storage.from('tb_storage').upload(`case_studies/${thumbnail.name}`, thumbnail);
             catdata.thumbnail=thumbnail.name
        }
        const { data, error } = await supabase
            .from('case_studies')
            .insert(catdata);

        if (error) {
            throw new Error(error.message);
        }

        return "case studies  created successfully";
    } catch (error) {
        console.error('Error fetching case studies :', error);
        throw error;
    }

}
const updateCaseStudies = async (id, catdata,banner_image=null,banner_image_logo=null,middle_banner=null,thumbnail=null) => {



    try {

        if(banner_image){
            const { banner_image_data, error } = await supabase.storage.from('tb_storage').upload(`case_studies/${banner_image.name}`, banner_image);
             catdata.banner_image=banner_image.name
        }
        if(banner_image_logo){
            const { banner_image_logo_data, error } = await supabase.storage.from('tb_storage').upload(`case_studies/${banner_image_logo.name}`, banner_image_logo);
             catdata.banner_image_logo=banner_image_logo.name
        }
        if(middle_banner){
            const { middle_banner_data, error } = await supabase.storage.from('tb_storage').upload(`case_studies/${middle_banner.name}`, middle_banner);
             catdata.middle_banner=middle_banner.name
        }
        if(thumbnail){
            const { thumbnail_data, error } = await supabase.storage.from('tb_storage').upload(`case_studies/${thumbnail.name}`, thumbnail);
             catdata.thumbnail=thumbnail.name
        }
        const { data, error } = await supabase
            .from('case_studies')
            .update(catdata)
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "case studies  updated successfully";

    } catch (error) {
        console.error('Error fetching case studies:', error);
        throw error;
    }

}
const editCaseStudies = async (id) => {



    try {

        let { data, error } = await supabase
            .from('case_studies')
            .select("*")
            .eq('id', id)



        if (error) {
            throw new Error(error.message);
        }

         data.filter((item)=>{
            if(item.banner_image){
                item.banner_image=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/tbw_storage/case_studies/${item.banner_image}`
            }
            if(item.banner_image_logo){
                item.banner_image_logo=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/tbw_storage/case_studies/${item.banner_image_logo}`
            }
            if(item.middle_banner){
                item.middle_banner=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/tbw_storage/case_studies/${item.middle_banner}`
            }
            if(item.thumbnail){
                item.thumbnail=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/tbw_storage/case_studies/${item.thumbnail}`
            }

        })
        return { data };

    } catch (error) {
        console.error('Error fetching case studies:', error);
        throw error;
    }

}
const deleteCaseStudies = async (id) => {



    try {

        const { data, error } = await supabase
            .from('case_studies')
            .delete()
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "case studies  deleted successfully !"

    } catch (error) {
        console.error('Error fetching case studies :', error);
        throw error;
    }

}

module.exports = {
    getCaseStudies: getCaseStudies,
    createCaseStudies: createCaseStudies,
    updateCaseStudies: updateCaseStudies,
    editCaseStudies: editCaseStudies,
    deleteCaseStudies: deleteCaseStudies,

}