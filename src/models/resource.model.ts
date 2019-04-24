import { Request, Response, NextFunction } from 'express';

export class Resource {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      name: { type: String, maxlength: 50 },
      link: { type: String, maxlength: 250 },
      cert_id: {
        type: Number,
        key: 'foreign',
        references: {table: 'Cert', foreignKey: 'id'},
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store info for resources for certs',
    [
      {
        route: '/create-resource',
        method: 'POST',
        callback: this.createResource,
        requireToken: true,
      },
      {
        route: '/update-resource/id/:id',
        method: 'PUT',
        callback: this.updateResource,
        requireToken: true,
      }
    ]];
  }

  createResource(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let resourceCtrl = model.controller;
      let resp = await resourceCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  updateResource(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let resourceCtrl = model.controller;
      let resp = await resourceCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}