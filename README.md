Para rodar o projeto

npm install

npm run start-dev


=> Formas de segurança na parte de usuários:


1. Autenticação e Autorização:

    Autenticação Multifator (MFA): Adicione uma camada extra de segurança, exigindo que os usuários forneçam mais de um método de verificação (ex.: senha e código enviado por SMS).
    Tokens de Autenticação Segura (JWT, OAuth): Utilize tokens seguros para autenticação de sessões e defina períodos curtos de expiração.

2. Segurança de Senhas:

    Criptografia Forte: Use algoritmos seguros, como bcrypt, para criptografar senhas armazenadas no banco de dados.
    Política de Senhas Fortes: Exija senhas com complexidade mínima, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.

3. Proteção Contra Ataques de Força Bruta:

    Bloqueio de Conta Temporário: Implemente bloqueios temporários após várias tentativas de login falhadas.
    CAPTCHA ou reCAPTCHA: Use verificação de CAPTCHA para proteger endpoints de login contra bots.

4. Proteção de Dados Pessoais:

    Dados Sensíveis Não Devem Ser Expostos: Evite expor informações pessoais desnecessárias nas respostas da API.
    Privacidade por Padrão: Colete apenas os dados necessários para a operação do sistema e minimize o tempo de armazenamento.

5. Comunicação Segura:

    Use HTTPS Sempre: Certifique-se de que a comunicação entre cliente e servidor seja feita por HTTPS para proteger contra interceptação de dados.
    Segurança de Cabeçalhos HTTP: Implemente cabeçalhos como Strict-Transport-Security e Content-Security-Policy.

6. Logs e Monitoramento:

    Auditoria de Logs de Acesso: Registre tentativas de login, falhas de autenticação e alterações importantes nas contas dos usuários.
    Alerta de Atividade Suspeita: Notifique os usuários e administradores quando uma atividade suspeita for detectada.

7. Política de Sessão:

    Tempo de Sessão Curto: Defina um tempo de expiração curto para sessões inativas.
    Logout Seguro: Implemente um mecanismo que permita o logout manual e a invalidação de tokens de sessão.

8. Proteção Contra CSRF e XSS:

    Tokens Anti-CSRF: Use tokens específicos para proteger formulários contra ataques de falsificação de solicitações entre sites.
    Sanitização de Entrada de Dados: Sempre sanitize e escape entradas de usuário para prevenir injeções de código malicioso.
