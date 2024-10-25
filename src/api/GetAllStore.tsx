
import axiosInstance from "../Axios-Config/Axios-Config"

export const GetAllStore = async({
  longitude,
  latitude,
}:{
  longitude : any;
  latitude : any
}) =>{
    try {
      const {data : {all_Store,domain_details}}:any  = await axiosInstance.get(`store/all/data/list?longitude=${longitude}&lattitude=${latitude}`)
      console.log(all_Store,domain_details,'hgyfgygfuy');
      
    
    
    } catch (error:any) {
     return{
      all_Store : [],
      domain_details : {}
     }
      
    }
}


    
