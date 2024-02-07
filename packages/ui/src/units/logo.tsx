import { FC } from 'react'

interface LogoProps {
  variant: 'dark' | 'light'
}

export const Logo: FC<LogoProps> = ({ variant }) => {
  return <div>App Logo</div>
}
