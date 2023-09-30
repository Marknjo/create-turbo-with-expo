# Turborepo Starter Repo For Expo apps (React Native), Storybook, NextJS, Solito & NestJs as API

![readme-img](https://github.com/Marknjo/portfolio-mark/assets/19428492/90905e44-76fc-4484-941d-395b7a217d41)

## 🔦 About

This monorepo is a starter for an Expo + Next.js + NestJs app using [Expo Router](https://expo.github.io/router/) with a design system package using react-native-web storybook and ui styled with Tailwind powered by Nativewind.

[Nativewind](https://www.nativewind.dev/) allows us to write components both for web and React Native with no overhead. I've also integrated [RadixUI](https://www.radix-ui.com/) library, thanks to ShadCn ui lib that proposes decoupled copy & pastable components rather than a ui library. This allows an easy conversion of web only components to reusable React Native & Web.

For ease of rendering semantic elements on web, the ui lib uses `as` property on all View Types and Text components to allow web remain web an react native, native.

## 🤕🤯 Headaches

There is an attempt to include Moti animation in the ui library, however, as the time of integration, Moti does not play well with web & storybook. I've completely decoupled those components that relies on Moti to only React Native. This allows us to use a simple utility called `isMobile/isWeb` that checks platform. Not ideal, by in the meantime it works.

There is also an issue with Solito `TextLink` & `MotiLink`. Since I've had an issue with `Moti`, I'm not using moti link on any web component or any component going through `StoryBook`, for now. For Solito `TextLink`, it is throwing warning related with useSelect & selector prop, however, the link is not problematic. I'll keep watching this for future updates & fixes.

All components coming from UI lib to web app (nestjs) must be declared with "use client", for now.

> **NOTE:** All Buttons include a Text component, which renders a Text in React native & span in web. This has to do with how React Native works. You can style text & button using usual Tailwind styling technics and the component will apply styles correctly to each component, button/Pressable or text/span. Also, for the web you can replace completely the text component with your own custom component i.e. Icons, by passing asChild prop.

## 📦 Included packages

- `solito` for cross-platform navigation
- `moti` for animations (works only on Expo - partially on web with errors)
- `Tailwind/NativeWind/ShadCn/RadixUI` for theming/design (you can bring your own, too)
- Storybook 7+ - `@storybook/addon-react-native-web` `@storybook/react-vite`
- `Expo` - Expo File based router SDK 49+
- `Next.js` 13+
- `Nest.js` 10+
- `React Query` 5+ - great for server side state management

## 🗂 Folder layout

> **NOTE**: This app uses pnpm as it's package manager & turbo repo. To make expo play nicely with monorepo i've enabled node-linker=hoisted and a few configs in expo project, see mobile configs & examples. All packages & apps uses @mj/ prefix as module names. This is my organization name, can change it to suit yours

- `apps` entry points for each app

  - `mobile`
    - `src` all components native to expo will be based in this dir (I've also added ts config for ease of imports, also there extra folders incase you may want to use them)
      - `app` all your file system routing needs on iOS and Android.
  - `web`
    - `src`
    - `app` - NestJs Router
  - `api` - NestJs api
    - `secret-generator.mjs` - file helps generate unique secrets/passwords
    - `src` - all api modules goes in here

- `configs` as of v0.1.0 configs are in their own workspace
  - `tsconfig` - customizes typescript configurations
  - `tailwind` - customize tailwind config here
  - `eslint`   - all customized eslint configs
  - `prettier` - prettier custom configs - run example `pnpm -F web format`. Note there is still `.prettierrc` in the monorepo directory. If you do not like running cli to format, comment/remove the `"prettier": "@mj/prettier"` settings in each **package.json** file like in the `@mj/api`. Removing it will default to the global prettier settings & on every save prettier will format the document as usual.

- `packages` shared packages across apps
  - `storybook` Your workshop residence

    - `stories` - create all stories in this folder. NOTE: due to setup it is not possessible to colocate component, since we're using ui
    - `components` - display/views template wrappers for your stories, inspired by Rewind UI
    - `.storybook`
    - `types`

  - `ui` Build all your ui in this module and import final components to different routes in your mobile & web apps

    - `component` - collection of components
    - `pages` - mobile screens & web app pages
      - `components` - organize each folder by feature; easy to test and to work with storybook design paradigm system
    - `utility` - tailwind theme & other utils
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

  - `api-lib` not essential, but a placeholder incase you need to share types, stubs, fetch api composition of sharable api request that can't stay in your ui package

## 🏁 Start the app

- Install dependencies: `pnpm i`

- All aps: `pnpm dev`

  - Runs turbo `pnpm dev` - does not run mobile - requires interactive terminal/cmd.

- Expo local dev: `pnpm -F mobile dev` (required for interactive terminal)

  - Runs `expo start --android` NOTE: I'm on window & linux, 🤭 not meant for `ios`

- Nest.js local dev: `pnpm -F api dev` or `pnpm dev -F @mj/api`
  - Runs `pnpm dev nest`
- Next.js local dev: `pnpm -F web dev` or `pnpm dev -F @mj/web`

  - Runs `pnpm next`

- storybook local dev: `pnpm -F storybook dev` or `pnpm dev -F @mj/storybook`
  - Runs `pnpm storybook`

> **NOTE:** use similar commands to run builds & tests & eslint

## 🆕 Add new dependencies

run `pnpm add -F @mj/<lib>`

Example: install `@types/node` in web app run: `pnpm add @types/node -F @mj/wev`

> **NOTE**:
>
> - Swap similar command for `update` & `remove` of a node module package
> - With Expo pay attention to packages compatibility, sometimes you'll have to downgrade some packages to resolve the dependencies

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## 🎙 About the creator

Follow Mark Njoroge on Twitter: [@marknjo7](https://twitter.com/@marknjo7)

Portfolio: [Mark Njoroge](https://marknjoroge.vercel.app)

## Useful Links

- Learn more about Turborepo - [Turborepo](https://turbo.build)
- Start using expo router and overall ecosystem of expo - [Expo router](https://docs.expo.dev/routing/introduction/)
- Learn More about React Native - [React Native](https://reactnative.dev/)
- Storybook docs - [Storybook](https://turbo.build)
- I've always admired the sophistication of NestJs, perhaps it's because we share the same name with the creator of the library or maybe I often confuse it with NextJs, but nonetheless, this is one of my favorite - [NestJs](https://nestjs.com/)
- The only reason we are talking about this setup is because there was a child and now a revered library we all love to use called React, here is their updated website better that it was ever [React](https://react.dev/)
- They also coined NestJs, ~~complex~~ as it is, thanks to server side components, but one of the best options for fullstack development - [NextJS](https://nextjs.org/)
- The React Query Team at Tanstack for building awesome solution for server side state management solution - [TanStack Query](https://tanstack.com/query/v5)
- Styling with Tailwind - [Tailwind](https://tailwindcss.com/)
- Everything about ShadCn - [ShadCn UI](https://ui.shadcn.com/)
- Shout out to Fernando Rojo for `Solito` & `Moti` libraries - [Solito](https://solito.dev/) & [Moti](https://solito.dev/usage/moti-link)

Inspired by Fernando Rojo on Twitter: [@FernandoTheRojo](https://twitter.com/fernandotherojo)

## 📝 FOOTNOTES

- By default I've disabled github actions & husky, remove .bkp suffixes and enable husky at the package.json by uncommenting script //
