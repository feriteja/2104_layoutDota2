export interface charrInfo {
  name: string;
  baseColor: string;
  image: any;
  roles: string;
  type: string;
  move: number;
  sound: any[];
  stats: {
    type: string;
    base: number;
    up: number;
  }[];
  skills: {
    name: string;
    image: any;
    effect: string;
  }[];
}
