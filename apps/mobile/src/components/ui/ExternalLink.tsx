import type { ComponentProps } from 'react'
import { Platform } from 'react-native'
import { Link } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'

export function ExternalLink(
  props: Omit<ComponentProps<typeof Link>, 'href'> & { href: string },
) {
  return (
    <Link
      hrefAttrs={{
        // On web, launch the link in a new tab.
        target: '_blank',
      }}
      {...props}
      href={props.href}
      onPress={e => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault()
          // Open the link in an in-app browser.

          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          WebBrowser.openBrowserAsync(props.href)
        }
      }}
    />
  )
}
