export interface platform {
  id: string    ;
  name:string;
  slug:string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: {platform: platform}[];
  metacritic: number;
  rating_top:number;
  rating:number;
}

export interface GamesResponse {
  count: number;
  results: Game[];
}
export interface Platform {
  id: string;
  name: string;
  slug: string;
}