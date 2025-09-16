import genres from "@/data/genres";

export interface Genre {
    id:number;
    name:string;
    image_background:string;
}


const useGenres = () =>({data:genres, isLoading:false, error:null});
console.log("useGenres hook called");
console.log(useGenres);
    
   
    

export default useGenres;