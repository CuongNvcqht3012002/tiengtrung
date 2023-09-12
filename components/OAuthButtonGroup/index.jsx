import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { GoogleIcon, FacebookIcon } from './ProviderIcons'

const providers = [
  { name: 'Google', icon: <GoogleIcon /> },
  { name: 'Facebook', icon: <FacebookIcon /> },
]

export default function OAuthButtonGroup() {
  return (
    <ButtonGroup variant="secondary" spacing="8">
      {providers.map(({ name, icon }) => (
        <Button key={name} flexGrow={1} border={'1px solid #ddd'}>
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  )
}
