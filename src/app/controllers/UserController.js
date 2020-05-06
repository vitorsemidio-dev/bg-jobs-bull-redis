import Mail from '../lib/Mail';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    }

    await Mail.sendMail({
      from: 'Queue Test <abc@email.com>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá ${name}, bem vindo ao sistema de fila de email`,
    });

    return res.json(user);
  }
}

export default new UserController();