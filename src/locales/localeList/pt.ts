export default {
  common: {
    continue: 'Continuar',
    pickAChoice: 'Escolha uma opcão',
    paymentMethods: {
      bankSlip: 'Boleto',
      pix: 'Pix',
      cash: 'Em dinheiro',
      payCheck: 'Cheque',
    },
    clientType: {
      largeBusiness: 'Acougue e Mercado',
      smallBusiness: 'Bar e Restaurante',
    },
  },
  screens: {
    registerMerchant: {
      title: 'Novo Cadastro',
    },
    registerEmployees: {
      title: 'Contatos',
    },
  },

  components: {
    employeeCard: {
      name: 'Nome',
      phone: 'Telefone',
    },
  },

  tabNames: {
    home: 'Início',
    clients: 'Clientes',
    orders: 'Pedidos',
    menu: 'Menu',
  },
  clients: {
    new: 'Novo',
  },
  error: {
    wifi: {
      title: 'Voce está desconectado!',
      message:
        'Não se preocupe. Tudo será sincronizado ao conectar-se novamente',
    },
    form: {
      taxpayerIdLength: 'O CNPJ deve ter exatos 18 caracteres',
      taxpayerIdInvalid: 'O CNPJ informado é inválido',
    },
  },
  modal: {
    newClient: {
      title: 'Novo Cadastro',
    },
    newOrder: {
      title: 'Novo pedido',
    },
  },
};
