import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

export type TNextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type TAppPropsWithLayout = AppProps & {
    Component: TNextPageWithLayout
}
