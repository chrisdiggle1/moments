import { rest } from 'msw';  // Make sure this import is added

const baseURL = "https://walkthrough-drf-api-1c81384c884e.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "chrisdiggle1",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image: "https://res.cloudinary.com/dseyqu8cu/image/upload/v1/media/../default_profile_st6mnc",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
