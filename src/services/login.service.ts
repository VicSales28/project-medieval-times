import bcrypt from 'bcryptjs';

import { ServiceResponse } from '../types/ServiceResponse';
import { Credentials } from '../types/Credentials';

import UserModel from '../database/models/user.model';
import jwtUtils from '../utils/jwtUtils';

async function login(user: Credentials): Promise<ServiceResponse<{ token: string }>> {
  const userFound = await UserModel.findOne({
    where: { username: user.username },
  });
  // console.log(userFound);

  if (!userFound || !bcrypt.compareSync(user.password, userFound.dataValues.password)) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    };
  } 

  const { id, username } = userFound.dataValues;
  const token = jwtUtils.generateToken({ id, username });
  console.log(token);
  
  return {
    status: 'SUCCESSFUL',
    data: { token },
  };
}

export default { login };