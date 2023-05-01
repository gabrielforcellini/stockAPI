import { Document, Model, Query } from 'mongoose';

interface BaseModel {
  _id: string; // ou outro tipo de dado que represente o ID
}

abstract class BaseDAO<T extends Document> {
  protected readonly model: Model<T & BaseModel>;

  constructor(model: Model<T & BaseModel>) {
    this.model = model;
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async create(data: Omit<T, '_id'>): Promise<T> {
    return this.model.create(data);
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.model.deleteOne({ _id: id }).exec();
    return result.deletedCount === 1;
  }
}

export default BaseDAO;
