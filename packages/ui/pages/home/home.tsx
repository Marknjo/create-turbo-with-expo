'use client'

import { Button } from '../../components/Buttons'
import { Row } from '../../components/Layouts'
import { A, H1, Text, TextLink } from '../../components/Typography'
import { PressableView, View } from '../../components/Layouts/view'

import { AnimatableBtn } from './components/AnimatableBtn'
import { AnimatableLink } from './components/AnimatableLink'
import { isMobile } from '../../utils'
import { styled } from 'nativewind'
import { View as ViewComponent } from 'react-native'

const CView = styled(ViewComponent)

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3" as="section">
      <H1 className="border-b-2 border-b-slate-800/5 pb-4 text-center text-xl font-semibold">
        Welcome to Turborepo Starter Repo For Expo apps (React Native),
        Storybook, NextJS, Solito & NestJs as API
      </H1>
      <View className="max-w-xl justify-center mx-auto" as="article">
        <Text className="text-center">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
        <Text className="my-4 text-center">
          This monorepo is prepared by
          <A
            href="https://twitter.com/marknjo7"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Mark Njoroge
          </A>
        </Text>
        <Text className="text-center">
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Fernando Rojo
          </A>
          .
        </Text>
        <Text className="text-center" as="p">
          NativeWind is made by{' '}
          <A
            href="https://twitter.com/mark__lawlor"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Mark Lawlor
          </A>
          .
        </Text>
      </View>
      <View className="h-8" as="article" />
      <Row className="flex w-full flex-wrap items-center justify-between px-8">
        <TextLink
          href="/two"
          className="text-base font-bold text-orange-500 hover:underline"
        >
          Regular Link
        </TextLink>
        <Button type="button" size='lg'>Just a Button</Button>
      </Row>

      {/* Mobile only  */}
      {isMobile && (
        <View className="mt-6 w-full border-t-2 border-t-slate-800/10">
          <H1 className="mb-8 text-center text-xl text-teal-800">
            Mobile Only Section
          </H1>
          <Row className="w-full items-center justify-between px-8">
            <AnimatableLink />

            <AnimatableBtn />
          </Row>
        </View>
      )}
    </View>
  )
}
