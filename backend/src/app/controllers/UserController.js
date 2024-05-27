const use = require('../models/Users');

const User = require('../models/Users'); // Importe o modelo User corretamente

class UserController {
    async insert(req, res) {
        const { name, email } = req.body;

        try {
            let user = await User.findOne({ where: { email } });

            if (user) {
                return res.status(200).json({ error: 'User already exists' });
            }

            user = await User.create({ name, email });
            console.log(user);

            return res.status(200).json(user);
        } catch (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: 'Database error' });
        }
    }

    async list(req, res) {
        try {
            const users = await User.findAll({
                attributes: ['id', 'name', 'email'],
                raw: true,
                order: [['name', 'ASC']]
            });
            return res.json(users);
        } catch (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: 'Database error' });
        }
    }

    async findUser(req, res) {
        const { email } = req.query;

        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            return res.json(user);
        } catch (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: 'Database error' });
        }
    }


}

module.exports = new UserController();

