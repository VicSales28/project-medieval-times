import { Request, Response } from 'express';

import loginService from '../services/login.service';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const resultService = await loginService.login({ username, password });

  if (resultService.status !== 'SUCCESSFUL') {
    return res.status(401).json(resultService.data);
  }

  return res.status(200).json(resultService.data);
}

export default {
  login,
};