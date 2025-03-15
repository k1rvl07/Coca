import express from "express";

export const jsonParser = express.json();
export const urlencodedParser = express.urlencoded({ extended: true });
