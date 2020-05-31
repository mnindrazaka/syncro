import { Request as ExpressRequest } from "express";

export interface Request extends ExpressRequest {
  [key: string]: any;
}

export interface Api {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
