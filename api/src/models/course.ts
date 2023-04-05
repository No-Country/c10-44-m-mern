import { model, Model, Schema } from "mongoose";

/**
 * Interface to modelate the Course Schema
 */
export interface ICourse {
   name: string;
   description: string;
   imageURL: string;
   level: string;
   isPublic: boolean;
   tags: string;
   isCompleted: boolean;
   createdAt: Date;
   updatedAt: Date;
}

/**
 * The return type of the Course model
 */
type CourseModel = Model<ICourse>;

export const courseSchema = new Schema<ICourse, CourseModel>(
   {
      name: { type: String, unique: true, required: true },
      description: { type: String, required: true },
      imageURL: { type: String, required: true },
      level: { type: String, required: true },
      isPublic: { type: Boolean },
      tags: { type: String },
      isCompleted: { type: Boolean },
   },
   {
      timestamps: true,
   }
);

export type CourseDocument = typeof courseSchema;

export const Course = model<ICourse, CourseModel>("Course", courseSchema);
