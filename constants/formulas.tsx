import { IFormula } from '@/interfaces/formulas'

export const FORMULAS_LANG = ['pt', 'en']
export const FORMULAS: IFormula = {
  soma: {
    id: 'soma',
    name: 'Soma',
    description: 'Soma os números de um intervalo.',
    prefixPt: 'SOMA',
    prefixEn: 'SUM',
    example: '={PREFIX}(A1:A5)',
    whenUse:
      'Para calcular rapidamente a soma de valores, como a soma de vendas mensais ou totais em uma coluna.',
    stepByStep: [
      'Clique na célula onde deseja o resultado.',
      'Digite ={PREFIX}( e selecione o intervalo de células (exemplo: A1 até A5).',
      'Pressione Enter. A função vai somar todos os valores no intervalo especificado.'
    ]
  },
  media: {
    id: 'media',
    name: 'Média',
    description: 'Calcula a média aritmética dos números de um intervalo.',
    prefixPt: 'MÉDIA',
    prefixEn: 'MEDIAN',
    example: '={PREFIX}(A1:A5)',
    whenUse:
      'Quando precisar descobrir a média de uma série de números, como a média de notas de alunos.',
    stepByStep: [
      'Clique na célula onde deseja o resultado.',
      'Digite ={PREFIX}(e selecione o intervalo de células (exemplo: A1 até A5).',
      'Pressione Enter. O Excel vai calcular a média dos valores no intervalo.'
    ]
  },
  se: {
    id: 'se',
    name: 'Se',
    description:
      'Faz uma comparação lógica e retorna um valor se a condição for verdadeira, e outro valor se for falsa.',
    prefixPt: 'SE',
    prefixEn: 'IF',
    example: '={PREFIX}(C2>10, "Maior que 10", "Menor ou igual a 10")',
    whenUse:
      'Para fazer decisões lógicas com base nos dados, como verificação de metas alcançadas ou avaliação de condições.',
    stepByStep: [
      'Clique na célula onde deseja o resultado.',
      'Digite ={PREFIX}( e insira a condição (exemplo: C2>10).',
      'Após a condição, coloque o valor que sera exibido se for verdadeira (exemplo: "Maior que 10") e, depois, o valor para o falso (exemplo: "Menor ou igual a 10").',
      'Pressione Enter.'
    ]
  },
  procv: {
    id: 'procv',
    name: 'Procv',
    description:
      ' Procura um valor em uma coluna e retorna um valor correspondente de outra coluna.',
    prefixPt: 'PROCV',
    prefixEn: 'VLOOKUP',
    example: '={PREFIX}("Produto A", A1:B10, 2, {FALSE})',
    whenUse:
      'Para buscar informações em grandes tabelas, como nome de produtos ou preços em uma lista.',
    stepByStep: [
      'Clique na celula onde deseja o resultado.',
      'Digite ={PREFIX}( e coloque o valor a ser procurado (exemplo: "Produto A").',
      'Selecione o intervalo onde o Excel deve procurar (exemplo: A1:B10).',
      'Digite o número da coluna do valor a ser retornado (exemplo: 2).',
      'Use {FALSE} se quiser uma correspondência exata.',
      'Pressione Enter.'
    ]
  }
}
