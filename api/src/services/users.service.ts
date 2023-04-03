import { User, IUser } from "../models/user";

const getAll = async () => {
  try {
    return await User.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getOneById = async (id: string) => {
  try {
    return await User.findById({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

const create = async (body: IUser) => {
  return User.create(body);
};

const updateOneById = async (id: string, body: Partial<IUser>) => {
  try {
    const moduleToUpdate = await User.findById(id);
    if (!moduleToUpdate) {
      throw new Error(
        "No se encontro el modulo que se esta buscando actualizar"
      );
    } else {
    await User.findOneAndUpdate({ _id: id }, body);
    return `Class updated successfully`;}
  } catch (err) {
    throw new Error(err);
  }
};

const deleteOneById = async (id: string) => {
  try {
    await User.deleteOne({ _id: id });
    return `Class deleted succesfully`;
  } catch (err) {
    throw new Error(err);
  }
};
export { getAll, getOneById, create, updateOneById, deleteOneById };
