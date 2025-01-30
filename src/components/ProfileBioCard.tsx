import { FC, ReactNode } from 'react'

type ProfileBioCardPropsType = {
  children: ReactNode
}

const ProfileBioCard: FC<ProfileBioCardPropsType> = ({ children }) => {
  return (
    <div className="rounded-3xl border border-dark-grey flex flex-col gap-y-7 px-8 py-6">
      <h3 className="text-2xl text-white font-semibold">Profile bio</h3>
      {children}
    </div>
  )
}

export default ProfileBioCard
