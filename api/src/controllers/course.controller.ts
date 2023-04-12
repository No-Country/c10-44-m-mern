import { Request, Response } from "express";
import * as courseService from "../services/course.service";
import { ICourse } from "../models/course";

const getAll = async (req: Request, res: Response) => {
   try {
      const modules = await courseService.getAll();
      res.status(200).json(modules);
   } catch (error) {
      console.error(error);
      res.status(400).json({
         errors: [
            {
               code: error.code,
               message: error.message,
            },
         ],
      });
   }
};

const getOneById = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const mod = await courseService.getOneById(id);
      res.status(200).json(mod);
   } catch (error) {
      console.error(error);
      res.status(400).json({
         errors: [
            {
               code: error.code,
               message: error.message,
            },
         ],
      });
   }
};

const create = async (req: Request, res: Response) => {
   try {
      const { body } = req;
      const response = await courseService.create(body);
      res.status(201).json(response);
   } catch (error) {
      console.error(error);
      res.status(400).json({
         errors: [
            {
               code: error.code,
               message: error.message,
            },
         ],
      });
   }
};

const updateById = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const body: ICourse = req.body;
      const response = await courseService.updateOneById(id, body);
      res.status(201).json(response);
   } catch (error) {
      console.error(error);
      res.status(400).json({
         errors: [
            {
               code: error.code,
               message: error.message,
            },
         ],
      });
   }
};

const deleteById = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const response = await courseService.deleteOneById(id);
      res.status(201).json(response);
   } catch (error) {
      console.error(error);
      res.status(400).json({
         errors: [
            {
               code: error.code,
               message: error.message,
            },
         ],
      });
   }
};

export { getAll, getOneById, create, updateById, deleteById };
