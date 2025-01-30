import { isoCountryCodes } from '../data/countries'
import { GeneralResponseType } from './general'

export type BaseDataResponseType = GeneralResponseType<{
  id: string
  tiktok?: {
    externalId: string
    id: string
    handle: string
    followersCount: number
    engagementRate: number
    followingCount: number
    likesCount: number
    postsCount: number
    region: Iso2
    bio: string
    isPrivate: number
    isVerified: boolean
    isActive: boolean
    medianEngagement: number
    medianViews: number
    sponsoredMedianEngagement: number
    sponsoredMedianViews: number
    isBrand: boolean
    isKyra: number
    profilePicture: string
    nickname: string
    language: string
    mostRecentPostsWithTypes: unknown[]
  }
  instagram?: {
    handle: string
  }
  youtube?: {
    channelId: string
  }
  general?: {
    email: string | null
  }
  predAge: string
  predGender: string
}> & {
  predictedFee: number
  predictedCpv: number
}

export type StatsHistoryPoint = {
  postsCount: number
  likesCount: number
  followersCount: number
  followingCount: number
  viewsCount: number
  createdAt: string
}

export type StatsHistoryResponseType = GeneralResponseType<{
  delta: {
    postsCount: {
      absolute: number
      percentage: number
    }
    likesCount: {
      absolute: number
      percentage: number
    }
    followersCount: {
      absolute: number
      percentage: number
    }
    followingCount: {
      absolute: number
      percentage: number
    }
  }
  historyPoints: StatsHistoryPoint[]
}>

export type Iso2 = keyof typeof isoCountryCodes

export type Iso3 = (typeof isoCountryCodes)[Iso2]
