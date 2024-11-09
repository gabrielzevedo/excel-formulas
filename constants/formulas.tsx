export const FORMULAS = {
  soma: {
    name: 'Soma',
    description: 'Soma os números de um intervalo.',
    example: '=SOMA(A1:A5)',
    whenUse:
      'Para calcular rapidamente a soma de valores, como a soma de vendas mensais ou totais em uma coluna.',
    stepByStep: [
      'Clique na célula onde deseja o resultado.',
      'Digite =SOMA(e selecione o intervalo de células (exemplo: A1 até A5).',
      'Pressione Enter. A função vai somar todos os valores no intervalo especificado.'
    ]
  },
  subtracao: {
    name: 'Subtração',
    description: 'Subtrai os números de um intervalo.',
    example: '=SUBTRAÇÃO(A1;A5)',
    whenUse:
      'Para calcular a diferença entre dois números, como a quantidade de itens restantes em estoque.',
    stepByStep: [
      'Clique na célula onde deseja o resultado.',
      'Digite =SUBTRAÇÃO(e selecione o intervalo de células (exemplo: A1 até A5).',
      'Pressione Enter. A função vai subtrair todos os valores no intervalo especificado.'
    ]
  }
}
