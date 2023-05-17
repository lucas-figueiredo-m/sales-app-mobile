export type CompanyActivity = {
  id: string;
  secao: string;
  divisao: string;
  grupo: string;
  classe: string;
  subclasse: string;
  descricao: string;
};

export type InfoCountry = {
  id: '1058';
  iso2: 'BR';
  iso3: 'BRA';
  nome: 'Brasil';
  comex_id: '105';
};

export type CompanySizeCodes = '01' | '03' | '05';
export type CompanySizeDescription =
  | 'Microempresa'
  | 'Empresa de Pequeno Porte'
  | 'Demais Empresas';

export type CompanySize = {
  id: CompanySizeCodes;
  descricao: CompanySizeDescription;
};

export type AssociateInfo = {
  cpf_cnpj_socio: string;
  nome: string;
  tipo: 'Pessoa Física' | 'Pessoa Jurídica' | 'Sócio Estrangeiro';
  data_entrada: string;
  cpf_representante_legal: string;
  nome_representante: null;
  faixa_etaria: string;
  atualizado_em: string;
  pais_id: string;
  qualificacao_socio: {
    id: number;
    descricao: 'Sócio-Administrador ';
  };
  qualificacao_representante: null;
  pais: InfoCountry;
};

export type RegistryStatus =
  | 'Nula'
  | 'Ativa'
  | 'Suspensa'
  | 'Inapta'
  | 'Ativa Não Regular'
  | 'Baixada';

export type ConsultTaxpayerIdData = {
  cnpj_raiz: string;
  razao_social: string;
  capital_social: string;
  responsavel_federativo: string;
  atualizado_em: string;
  porte: CompanySize;
  natureza_juridica: {
    id: string;
    descricao: string;
  };
  qualificacao_do_responsavel: {
    id: 49;
    descricao: 'Sócio-Administrador '; // TODO: check this table: https://apicenter.estaleiro.serpro.gov.br/documentacao/consulta-cnpj/pt/tipos_qualificacao_socio/
  };
  socios: AssociateInfo[];
  simples: {
    simples: 'Sim' | 'Não';
    data_opcao_simples: string;
    data_exclusao_simples: null;
    mei: 'Sim' | 'Não';
    data_opcao_mei: null;
    data_exclusao_mei: null;
    atualizado_em: string;
  };
  estabelecimento: {
    cnpj: string;
    atividades_secundarias: CompanyActivity[];

    cnpj_raiz: string;
    cnpj_ordem: string;
    cnpj_digito_verificador: string;
    tipo: 'Matriz' | 'Filial';
    nome_fantasia: string;
    situacao_cadastral: RegistryStatus;
    data_situacao_cadastral: string;
    data_inicio_atividade: string;
    nome_cidade_exterior: string | null;
    tipo_logradouro: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    ddd1: string;
    telefone1: string;
    ddd2: string | null;
    telefone2: string | null;
    ddd_fax: string | null;
    fax: string | null;
    email: string;
    situacao_especial: null;
    data_situacao_especial: null;
    atualizado_em: string | null;
    atividade_principal: CompanyActivity;
    pais: InfoCountry;
    estado: {
      id: 11;
      nome: 'Minas Gerais';
      sigla: 'MG';
      ibge_id: 31;
    };
    cidade: {
      id: 2663;
      nome: 'Juiz de Fora';
      ibge_id: 3136702;
      siafi_id: '4733';
    };
    motivo_situacao_cadastral: null;
    inscricoes_estaduais: [];
  };
};
