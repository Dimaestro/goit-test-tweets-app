import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tweetsApi = createApi({
  reducerPath: 'tweetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://647a0bbda455e257fa643d29.mockapi.io' }),
  tagTypes: ['User'],
  refetchOnFocus: true,
  refetchOnReconnect: true, 
  endpoints: (builder) => ({
    getTweets: builder.query({
      query: () => `/tweets`,
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "User", id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }];
      },
      transformResponse: (response) => {
        return response.sort((b, a) => a.tweets - b.tweets);
      },
    }),
    updateTweets: builder.mutation({
      query: (data) => {
        const {id, ...body} = data;
        return {
          url: `/tweets/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['User'],
    })
  }),
})

export const { useGetTweetsQuery, useUpdateTweetsMutation } = tweetsApi;