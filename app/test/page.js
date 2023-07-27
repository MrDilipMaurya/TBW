"use client";
import {getProjectCategory,createProjectCategory,updateProjectCategory,deleteProjectCategory,editProjectCategory} from '../../api/projectCategory'
// import {getContactOption,createContactOption,updateContactOption,deleteContactOption,editContactOption} from '../../api/contactOption'
import {getContacts,createContacts,updateContacts,deleteContacts,editContacts} from '../../api/contact'
import {getReviews,createReviews,updateReviews,deleteReviews,editReviews} from '../../api/reviews'
import {getProjects,createProjects,updateProjects,deleteProjects,editProjects} from '../../api/project'
import {getServices,createServices,updateServices,deleteServices,editServices} from '../../api/services'
import {getProjectUnderProjectCategory} from '../../api/projectUnderProjectCategory'
import {getCaseStudies,createCaseStudies} from '../../api/caseStudies'

const MyPage = () => {
  
  const handleClick = async () => {
    //  project category

    // get project category
    // const result = await getProjectCategory();
    // console.log(result);

    // create project category
    // var data =[{category:'e-commerce'}]
    // const result = await createProjectCategory(data);
    // console.log(result);


    // update project category
    // var data =[{category:'e-commerce2'}]
    // var id=2
    // const result = await updateProjectCategory(id,data);
    // console.log(result);


    
    // delete project category
    // var id=2
    // const result = await deleteProjectCategory(id);
    // console.log(result);
    
    // edit project category
    // var id=1
    // const result = await editProjectCategory(id);
    // console.log(result);



    // get contact option
   
    // const result = await createContactOption({option:'kuch bhi'});
    // console.log(result);
    
    // // get contact 
    // const result = await getContacts();
    // console.log(result);


    // create contact 
    // var data=[{contact_option:'option2',contact_name:'himanhus',contact_email:'sdhu@ds.ij',contact_description:'sdsd'}]
    // const result = await createContacts(data);

    // create reviews
    //   var data=[{star_rating:'5',comment:'sfgsd',client_name:'rohit sharma',client_description:'sdsd'}]
    // const result = await createReviews(data);
    // console.log(result);

    // create projects

    
    //   var data={project_name:'5',project_category:'sfgsd',project_image:'rohit sharma',project_description:'sdsd',tickets_booked:'4',revenue_generated:'40m'}
    // const result = await getProjects();
    // console.log(result);
    // console.log(event.target.files[0]);

    // get services
    //   var data={title:'title1',description:'sfgsd'}

    //  const result = await getServices();
    // console.log(result);

    // get projectUnderProjectCategory
    //  const result = await getProjectUnderProjectCategory('subscription');
    // console.log(result);
    
    // case studies
    const element = document.getElementById('selectfile');
    // const res = await editContactOption(1);
    // console.log(res);/
  }
  return (
    <>
      <input type="file" id="selectfile" multiple />
      
    <button onClick={handleClick}>Click Me</button>
</>
  );
};

export default MyPage;
