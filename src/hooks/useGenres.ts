import useData from "./useData";

export interface Genre {
    id:number;
    name:string;
    image_background:string;
}


const useGenres = () =>useData<Genre>("/genres")
console.log("useGenres hook called");
console.log(useGenres);
    
   
    

export default useGenres;