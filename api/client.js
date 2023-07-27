import { supabase } from '../supabase';

const getClients = async () => {

    try {
        const { data, error } = await supabase
            .from('client')
            .select('*')
            .order('order', { ascending: true });

        if (error) {
            throw new Error(error.message);
        }

       data.filter((item)=>{
            item.client_image=`https://anyijxohgwdjjomafoml.supabase.co/storage/v1/object/public/tbw_storage/client/${item.client_image}`
        })
        return { data };
    } catch (error) {
        console.error('Error fetching Clients:', error);
        throw error;
    }
}



const createClients = async (orderNum=null,file = null) => {
var catdata = {client_image:'',order:''};
    try {


      
        if (file) {
            const { outputPath, fileerror } = await supabase.storage
                .from('tb_storage')
                .upload(`client/${file.name}`, file);


            if (fileerror) {
                throw new Error(fileerror.message);
            }
            catdata.client_image = file.name;
            catdata.order = orderNum;
        }


        const { data, error } = await supabase
            .from('client')
            .insert(catdata);


        if (error) {
            throw new Error(error.message);
        }

        return "Clients created successfully";

    } catch (error) {
        console.error('Error fetching Clients:', error);
        throw error;
    }

}



const updateClients = async (id,orderNum,file) => {
// var catdata = {client_image:'',order:''};
    try {

        if (file) {
            var catdata = {client_image:'',order:''};

            const { outputPath, fileerror } = await supabase.storage
                .from('tb_storage')
                .upload(`client/${file.name}`, file);


            if (fileerror) {
                throw new Error(fileerror.message);
            }
            catdata.client_image = file.name;
        
            catdata.order = orderNum;
        
        const { data, error } = await supabase
            .from('client')
            .update(catdata)
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }
        }
        if(orderNum && (file==null)){
            const { data, error } = await supabase
            .from('client')
            .update({order:orderNum})
            .match({ id: id });
            if (error) {
            throw new Error(error.message);
        }
        }
        return "Clients updated successfully";
    
    } catch (error) {
        console.error('Error fetching Clients:', error);
        throw error;
    }
}




const editClients = async (id) => {
    try {

        let { data, error } = await supabase
            .from('client')
            .select("*")
            .eq('id', id)

        

        if (error) {
            throw new Error(error.message);
        }

        return { data };

    } catch (error) {
        console.error('Error fetching Clients:', error);
        throw error;
    }
}




const deleteClients = async (id) => {
    try {

        const { data, error } = await supabase
            .from('client')
            .delete()
            .match({ id: id });

        if (error) {
            throw new Error(error.message);
        }

        return "Clients deleted successfully !"

    } catch (error) {
        console.error('Error fetching Clients:', error);
        throw error;
    }
}





module.exports = {
    getClients: getClients,
    createClients: createClients,
    updateClients: updateClients,
    editClients: editClients,
    deleteClients: deleteClients,

}