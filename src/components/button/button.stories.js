import React from "react";
import Button from "./button";

export default {
  title: "Button"
};
export const normal = () => <Button variant="primary">Hello World!</Button>;
export const danger = () => <Button variant="danger">Hello World!</Button>;
