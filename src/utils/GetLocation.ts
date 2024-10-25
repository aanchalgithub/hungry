export const GetLocation = () =>{
    navigator.geolocation.getCurrentPosition(success,err)
    function success(positions : any){
        sessionStorage.setItem("longitude",positions.coords.longitude)
        sessionStorage.setItem("latitude",positions.coords.latitude)
    }
    function err(err : any){
        sessionStorage.removeItem("longitude")
        sessionStorage.removeItem("latitude")
    }
}