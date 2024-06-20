export interface IGetPlanets {
  next: string | null;
  previous: string | null;
  results: IPlanet[];
  count:number
}

export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  surface_water: string;
  population:string;
  terrain: string;
  residents:string[];
  films:string[];
  created: string;
  edited: string;
  url: string;

}
