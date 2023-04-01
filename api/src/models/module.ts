import mongoose, { model, Model, Schema } from "mongoose";
import { Class, ClassDocument } from "./class";

/**
 * Interface to modelate the Class Schema
 */
export interface IModule {
  name: string;
  isCompleted: boolean;
  classes: ClassDocument[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * The return type of the User model
 */
type ModuleModel = Model<IModule>;

export const moduleSchema = new Schema<IModule, ModuleModel>(
  {
    name: { type: String, unique: true, required: true },
    isCompleted: { type: Boolean },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  },
  {
    timestamps: true,
  }
);

export type ModuleDocument = typeof moduleSchema;

export const Module = model<IModule, ModuleModel>("Module", moduleSchema);
