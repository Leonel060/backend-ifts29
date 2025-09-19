import BaseController from './BaseController.js';
import User from '../models/UserModel.js';

class UserController extends BaseController {
    constructor() {
        super(User);
    }
}

export default new UserController();

