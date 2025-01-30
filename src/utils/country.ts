import { isoCountryCodes, countries } from '../data/countries'
import type { Iso2, Iso3 } from '../types/discovery'

export const getIso3FromIso2 = (iso2: Iso2): Iso3 | null => {
  return isoCountryCodes[iso2] || null
}

export const getIso2FromIso3 = (iso3: string): Iso2 | null => {
  const iso2 = (Object.keys(isoCountryCodes) as Iso2[])?.find(
    (key) => isoCountryCodes[key] === iso3?.toUpperCase()
  )
  return iso2 || null
}

export const getCountryNameFromIso3 = (iso3: Iso3) =>
  countries.find((country) => country.code === iso3)?.name

export const getCountryNameFromIso2 = (iso2: Iso2) =>
  getCountryNameFromIso3(getIso3FromIso2(iso2) as Iso3)
