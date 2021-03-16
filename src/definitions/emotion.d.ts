import { Context } from './Component'

declare module '@emotion/react' {
  export interface Theme extends Context {}
}
