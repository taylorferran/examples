import { BApp, Strategy } from '../../src/types/app-interface'
import { testingKeyPair1, testingKeyPair2, testingKeyPair3, testingKeyPair4 } from './protocol'

// BApp
export const TestingBApp: BApp = {
  address: 'SimpleBlockAgreement',
  tokens: [{ address: '0xad45a78180961079bfaeee349704f411dff947c6', sharedRiskLevel: 2, significance: 2 }],
  validatorBalanceSignificance: 1,
}

// Strategies
export const Testing4Strategies: Strategy[] = [
  {
    id: 1,
    owner: 'owner1',
    privateKey: testingKeyPair1.privateKey,
    tokens: [
      { address: '0xad45a78180961079bfaeee349704f411dff947c6', amount: 100, obligationPercentage: 0.5, risk: 1.5 },
    ],
    validatorBalance: 32,
  },
  {
    id: 2,
    owner: 'owner2',
    privateKey: testingKeyPair2.privateKey,
    tokens: [
      { address: '0xad45a78180961079bfaeee349704f411dff947c6', amount: 200, obligationPercentage: 0.1, risk: 1.0 },
    ],
    validatorBalance: 96,
  },
  {
    id: 3,
    owner: 'owner3',
    privateKey: testingKeyPair3.privateKey,
    tokens: [
      { address: '0xad45a78180961079bfaeee349704f411dff947c6', amount: 150, obligationPercentage: 0.2, risk: 1.2 },
    ],
    validatorBalance: 64,
  },
  {
    id: 4,
    owner: 'owner4',
    privateKey: testingKeyPair4.privateKey,
    tokens: [
      { address: '0xad45a78180961079bfaeee349704f411dff947c6', amount: 300, obligationPercentage: 0.2, risk: 1.2 },
    ],
    validatorBalance: 128,
  },
]
