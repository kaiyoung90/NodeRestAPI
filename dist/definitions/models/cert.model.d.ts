import { Request, Response, NextFunction } from 'express';
export declare class Cert {
    _model: any;
    constructor(norm: any);
    createCert(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateCert(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
