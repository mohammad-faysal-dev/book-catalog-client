export interface IUser {
  id: string;
  email: string;
  name?: string;
}

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: string[];
  addedBy?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IBookInput {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

export interface IReview {
  bookId: string;
  review: string;
}

export interface IWishlist {
  _id: string;
  userId: string;
  books: IBook[];
  readingList?: IBook[];
  finished?: IBook[];
}

export interface IApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
}