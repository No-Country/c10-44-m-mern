import { Module, IModule } from "../models/module";

const getAll = async () => {
  try {
    return await Module.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getOneById = async (id: string) => {
  try {
    return await Module.findById({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

const create = async (body: IModule) => {
  try {
    await Module.create(body);
    return { message: `Class created successfully` };
  } catch (err) {
    throw new Error(err);
  }
};

const updateOneById = async (id: string, body: Partial<IModule>) => {
  try {
    const moduleToUpdate = await Module.findById(id);
    if (!moduleToUpdate) {
      throw new Error(
        "No se encontro el modulo que se esta buscando actualizar"
      );
    } else {
    await Module.findOneAndUpdate({ _id: id }, body);
    return `Class updated successfully`;}
  } catch (err) {
    throw new Error(err);
  }
};

const deleteOneById = async (id: string) => {
  try {
    await Module.deleteOne({ _id: id });
    return `Class deleted succesfully`;
  } catch (err) {
    throw new Error(err);
  }
};
export { getAll, getOneById, create, updateOneById, deleteOneById };
