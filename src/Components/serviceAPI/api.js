import axios from 'axios';


const URL = 'http://localhost:8000';
export const authenticateSignup = async (data) =>
{
    console.log("I AM HERE")
    try{

        return  await axios.post(`${URL}/sign-up`, data);
    }
    catch(error)
    {
        console.log('Error while Calling API  ' , error.message);
    }
}