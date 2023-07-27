"use client";




import { login } from '../../api/login'
import { logout} from '../../api/logout'
const MyPage = () => {

  const handleClick = async () => {
    const res = await login('dilip.kumar@taknikbharti.com','Dilip@123');
    console.log(res);
  }
  const signout = async()=>{
     const res =await logout();
    console.log(res);
  }
  return (
    <>
      <button onClick={handleClick}>login Me</button>
      <button onClick={signout}>Logout Me</button>
    </>

  );
};

export default MyPage;
