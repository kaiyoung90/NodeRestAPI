import { Request, Response, NextFunction } from 'express';
export declare class Resource {
    _model: any;
    constructor(norm: any);
    createResource(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
