const use = require('../models/Users');

class UserController {
   async insert(req, res) {
        const { name, email } = req.body;
    
        const user = await use.create({ name, email });
    
        return res.json(user);
   }

    async list(req, res) {
          const users = await use.findAll();
     
          return res.json(users);
    }

}