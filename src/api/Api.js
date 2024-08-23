// import axios from "axios"
// const api = axios.create({
//     baseURL: process.env.INVEST_MAP_API, // .env fayldan URL olamiz
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// export const SignUp =async(data)=>{
//     try {
//         const response = await api.post("/user/register",data);  
//         return response?.data;
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// export const SignIn =async(data)=>{
//     try{
//         const response = await api.post("/user/login", data);
//         return response?.data;
//     }
//     catch(error){
//         console.log(error)
//     }
// }