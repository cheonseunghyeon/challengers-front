import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '.';
import { getCookie } from './cookie';

export const clubController = createApi({
  reducerPath: 'clubController',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/club/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.accessToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getComment: builder.query({
      query: (requestId: string | undefined) => {
        return {
          url: `join-requests/commment/${requestId}`,
          headers: {
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWNoYW4yQGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzNTY1NTA3LCJleHAiOjE2OTM1NjkxMDd9.c6uxrHUqT2JI77cdnYEh-yFamsvrgLkn2jq4SfAV1Gs`,
          },
        };
      },
    }),
    getLogos: builder.query({
      query: () => {
        return { url: 'get/logo/all' };
      },
    }),
    getClubDetail: builder.query({
      query: (clubId: string | undefined) => {
        return {
          url: 'get',
          params: { id: clubId },
          headers: {
            'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWNoYW4yQGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzNTY1NTA3LCJleHAiOjE2OTM1NjkxMDd9.c6uxrHUqT2JI77cdnYEh-yFamsvrgLkn2jq4SfAV1Gs`,
          },
        };
      },
    }),
    createClub: builder.mutation({
      query: (newClubData) => ({
        url: 'create',
        method: 'POST',
        body: newClubData,
      }),
    }),
    getMyClub: builder.query({
      query: () => ({
        url: 'get/club/my',
        // 헤더 넣는 법 알기
      }),
    }),
    getClubList: builder.query({
      query: () => {
        return { url: 'list' };
      },
    }),
    getPendingUsers: builder.query({
      query: (clubId: string | undefined) => ({
        url: `join-requests/pending/users/${clubId}`,
        headers: {
          'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWNoYW4yQGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzNTY1NTA3LCJleHAiOjE2OTM1NjkxMDd9.c6uxrHUqT2JI77cdnYEh-yFamsvrgLkn2jq4SfAV1Gs`,
        },
      }),
    }),
    acceptCrew: builder.mutation({
      query: (data) => ({
        url: `join-requests/accept/${data.clubId}`,
        method: 'POST',
        params: { addUserEmail: data.email },
        headers: {
          'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWNoYW4yQGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzNTY1NTA3LCJleHAiOjE2OTM1NjkxMDd9.c6uxrHUqT2JI77cdnYEh-yFamsvrgLkn2jq4SfAV1Gs`,
        },
      }),
    }),
    rejectCrew: builder.mutation({
      query: (data) => ({
        url: `join-requests/reject/${data.clubId}`,
        method: 'DELETE',
        params: { rejectUserEmail: data.email },
        headers: {
          'X-AUTH-TOKEN': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWNoYW4yQGthbmduYW0uYWMua3IiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjkzNTY1NTA3LCJleHAiOjE2OTM1NjkxMDd9.c6uxrHUqT2JI77cdnYEh-yFamsvrgLkn2jq4SfAV1Gs`,
        },
      }),
    }),
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const {
  useGetLogosQuery,
  useGetClubDetailQuery,
  useCreateClubMutation,
  useGetMyClubQuery,
  useGetClubListQuery,
  useAcceptCrewMutation,
  useGetPendingUsersQuery,
  useRejectCrewMutation,
  useGetCommentQuery,
} = clubController;

export default clubController;
