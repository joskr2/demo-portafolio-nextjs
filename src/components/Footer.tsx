import { FC } from 'react'

interface Props {
  title: string
  description: string
}

const Footer: FC<Props> = () => {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  )
}

export default Footer