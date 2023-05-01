import { Client } from 'pg';

interface Model {
  id: number;
}

abstract class BaseDAO<T extends Model> {
  protected readonly client: Client;
  protected readonly tableName: string;

  constructor(client: Client, tableName: string) {
    this.client = client;
    this.tableName = tableName;
  }

  async findAll(): Promise<T[]> {
    const query = `SELECT * FROM ${this.tableName}`;
    const { rows } = await this.client.query<T>(query);
    return rows;
  }

  async findById(id: number): Promise<T | null> {
    const query = `SELECT * FROM ${this.tableName} WHERE id = $1`;
    const { rows } = await this.client.query<T>(query, [id]);
    return rows[0] || null;
  }

  async create(data: Omit<T, 'id'>): Promise<T> {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const query = `
      INSERT INTO ${this.tableName} (${keys.join(', ')})
      VALUES (${keys.map((_, i) => `$${i + 1}`).join(', ')})
      RETURNING *
    `;
    const { rows } = await this.client.query<T>(query, values);
    return rows[0];
  }

  async update(id: number, data: Partial<T>): Promise<T | null> {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const setClause = keys.map((key, i) => `${key} = $${i + 2}`).join(', ');
    const query = `
      UPDATE ${this.tableName}
      SET ${setClause}
      WHERE id = $1
      RETURNING *
    `;
    const { rows } = await this.client.query<T>(query, [id, ...values]);
    return rows[0] || null;
  }

  async delete(id: number): Promise<boolean> {
    const query = `DELETE FROM ${this.tableName} WHERE id = $1`;
    const { rowCount } = await this.client.query(query, [id]);
    return rowCount > 0;
  }
}

export default BaseDAO;
