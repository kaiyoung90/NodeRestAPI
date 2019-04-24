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
class Resource {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                name: { type: String, maxlength: 50 },
                link: { type: String, maxlength: 250 },
                cert_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'Cert', foreignKey: 'id' },
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
                }
            ]];
    }
    createResource(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let resourceCtrl = model.controller;
            let resp = yield resourceCtrl.insert(req, null, null);
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
exports.Resource = Resource;
