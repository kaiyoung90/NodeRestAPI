import { Request, Response, NextFunction } from 'express';

export class CertType {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      field: { type: String, maxlength: 24 },
    }, 'A table to store certification type info, such as "general" or "networking".',
    [
      {
        route: '/create-cert-type',
        method: 'POST',
        callback: this.createCertType,
        requireToken: true,
      },
      {
        route: '/update-cert-type/id/:id',
        method: 'PUT',
        callback: this.updateCertType,
        requireToken: true,
      }
    ]];
  }

  createCertType(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let certTypeCtrl = model.controller;
      let resp = await certTypeCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  updateCertType(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let certTypeCtrl = model.controller;
      let resp = await certTypeCtrl.update(req, null, null);
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