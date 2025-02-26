import dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

import { App } from './app/app'
import { getData } from './data/get-data'

/*
import { BasedAppsSDK } from "@ssv-labs/bapps-sdk";

const sdk = new BasedAppsSDK({
    bamGraphUrl: 'https://api.studio.thegraph.com/query/71118/based-applications-ssv-holesky/version/latest',
    dvtGraphUrl: 'https://api.studio.thegraph.com/query/71118/ssv-network-holesky/version/latest',
    beaconchainUrl: 'http://57.129.73.156:31101',
}); */

dotenv.config()

const main = async () => {
  const app = new App()

  const bAppAddress = (process.env.BAPP_ADDRESS || '') as `0x${string}`
  if (!bAppAddress.startsWith('0x')) {
    throw new Error('BAPP_ADDRESS must start with 0x')
  }

  const useExponentialWeight = process.env.USE_EXPONENTIAL_WEIGHT === 'true'
  const useHarmonicCombination = process.env.USE_HARMONIC_COMBINATION_FUNCTION === 'true'

  const { bApp, strategies, slot } = await getData(bAppAddress)


  await app.Setup(bApp, strategies, useExponentialWeight, useHarmonicCombination)
  app.StartAgreement(slot)
}

main().catch(console.error)