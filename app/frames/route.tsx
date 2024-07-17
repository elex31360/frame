/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const frameHandler = frames(async (ctx) => {
  const counter = ctx.message
    ? ctx.searchParams.op === "+"
      ? ctx.state.counter + 1
      : ctx.state.counter - 1
    : ctx.state.counter;

  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex">frames.js starter</div>
        {ctx.message?.inputText && (
          <div tw="flex">{`Input: ${ctx.message.inputText}`}</div>
        )}
        <div tw="flex">Counter {counter}</div>
      </div>
    ),
    textInput: "Say something",
    buttons: [
      <Button action="post" target={{ pathname: "/", query: { op: "+" } }}>
        Increment
      </Button>,
      <Button action="post" target={{ pathname: "/", query: { op: "-" } }}>
        Decrement
      </Button>,
    ],
    state: { counter: counter },
    headers: {
      // Max cache age in seconds
      "Cache-Control": "max-age=0",
      // "Content-Type:": "image/png",
    },
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
