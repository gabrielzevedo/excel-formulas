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
      'Digite ={PREFIX}(e selecione o intervalo de células (exemplo: A1 até A5).',
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
  }
}
