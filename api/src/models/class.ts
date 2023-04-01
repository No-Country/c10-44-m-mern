import { model, Model, Schema } from "mongoose";

/**
 * Interface to modelate the Class Schema
 */
export interface IClass {
  name: string;
  content: string;
  videoURL: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * The return type of the User model
 */
type ClassModel = Model<IClass>;

export const classSchema = new Schema<IClass, ClassModel>(
  {
    name: { type: String, unique: true, required: true },
    content: { type: String },
    videoURL: { type: String, required: true },
    isCompleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export type ClassDocument = typeof classSchema;

export const Class = model<IClass, ClassModel>("Class", classSchema);
