import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "../../types";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["Book", "Books"],
  endpoints: (builder) => ({
    getBooks: builder.query<
      IBook[],
      { search?: string; genre?: string; year?: string }
    >({
      query: (filter) => {
        let url = "/books";
        const params = new URLSearchParams();

        if (filter.search) params.append("search", filter.search);
        if (filter.genre) params.append("genre", filter.genre);
        if (filter.year) params.append("year", filter.year);

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        return url;
      },
      providesTags: ["Books"],
    }),
    getSingleBook: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      providesTags: ["Books"],
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = bookApi;
