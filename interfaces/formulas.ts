export type IFormula = Record<string, IFormulaInfos>

export interface IFormulaInfos {
  id: string
  name: string
  description: string
  prefixPt: string
  prefixEn: string
  example: string
  whenUse: string
  stepByStep: string[]
}
