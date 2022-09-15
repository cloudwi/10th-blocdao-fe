export enum StackName {
  FRONT = 'FRONT',
  BACK = 'BACK',
  MOBILE = 'MOBILE',
  ETC = 'ETC',
}

export interface Stack {
  id: number
  name: string
  imageUrl: string
}

const getNames = (): StackName[] => {
  return [StackName.FRONT, StackName.BACK, StackName.MOBILE, StackName.ETC]
}

export const StackService = {
  getNames,
}
