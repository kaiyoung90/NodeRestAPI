import { Request, Response, NextFunction } from 'express';
export declare class CertType {
    _model: any;
    constructor(norm: any);
    createCertType(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
