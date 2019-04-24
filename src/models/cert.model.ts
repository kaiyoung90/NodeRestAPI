import { Request, Response, NextFunction } from 'express';

export class Cert {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      name: { type: String, maxlength: 120 },
      description: { type: String, maxlength: 150 },
      validity: { type: String, maxlength: 50 },
      cert_type_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'CertType', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store certification info',
    [
      {
        route: '/create-cert',
        method: 'POST',
        callback: this.createCert,
        requireToken: true,
      },
      {
        route: '/update-cert/id/:id',
        method: 'PUT',
        callback: this.updateCert,
        requireToken: true,
      }
    ]];
  }

  createCert(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let certCtrl = model.controller;
      let resp = await certCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  updateCert(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let certCtrl = model.controller;
      let resp = await certCtrl.update(req, null, null);
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