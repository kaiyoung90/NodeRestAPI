"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Cert {
    constructor(norm) {
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
                }
            ]];
    }
    createCert(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let certCtrl = model.controller;
            let resp = yield certCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Cert = Cert;
