import { Request, Response } from 'express'


export function indexWelcome(req: Request, res: Response) {
    return res.json('Welcome to my TS Api')
}