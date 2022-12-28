import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const newsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "Add your own rappid Api key",
  "X-RapidAPI-Host": "Add the related host",
};

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCatagory, count }) =>
        createRequest(
          `/news/search?q=${newsCatagory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
