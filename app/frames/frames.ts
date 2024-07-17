import { createFrames } from "frames.js/next";

type State = {
  counter: number;
};
// https://nextjs-ashen-beta-53.vercel.app
// http://localhost:3000
export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: { counter: 0 },
  debug: process.env.NODE_ENV === "development",
});
