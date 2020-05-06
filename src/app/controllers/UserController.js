import Queue from '../lib/Queue';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    }

    // Adicionar job RegistrationMail na fila
    await Queue.add({ user });

    return res.json(user);
  }
}

export default new UserController();