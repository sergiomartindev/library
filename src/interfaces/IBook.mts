import Genre from "../enums/Genre.mjs";

interface IBook {
  id: string;
  author: string;
  title: string;
  genres: Genre[];
}

export default IBook;