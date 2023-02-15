import { Connection, createConnections } from "typeorm";
import { Service } from "typedi";

export interface IDBConnection<t> {
  instance: t;
  connect(): Promise<any>;
  disconnect(): Promise<any>;
}

@Service()
export class TypeORMConnection implements IDBConnection<Connection[]> {
  private _instance: Connection[];

  async connect(): Promise<void> {
    this._instance = await createConnections();
  }

  async disconnect(): Promise<void> {
    await Promise.all(this.instance.map((instance) => instance.close()));
  }

  public get instance(): Connection[] {
    return this._instance;
  }
}
