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
class CertType {
    constructor(norm) {
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
                }
            ]];
    }
    createCertType(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let certTypeCtrl = model.controller;
            let resp = yield certTypeCtrl.insert(req, null, null);
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
exports.CertType = CertType;
