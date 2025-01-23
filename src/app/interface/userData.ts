export interface IUserData {
  id: number;
  name: string;
  image: string;
  email: string;
  favoriteFood: { id: number; name: string; image: string }[];
  favoriteDestination: { id: number; name: string; image: string }[];
}
