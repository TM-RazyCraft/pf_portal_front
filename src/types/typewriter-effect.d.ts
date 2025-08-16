declare module 'typewriter-effect/dist/core' {
  interface TypewriterOptions {
    strings?: string[]
    autoStart?: boolean
    loop?: boolean
    delay?: number
    deleteSpeed?: number
    cursor?: string
    devMode?: boolean
    skipAddStyles?: boolean
    wrapperClassName?: string
    cursorClassName?: string
    stringSplitter?: (text: string) => string[]
    onCreateTextNode?: (character: string, textNode: Text) => Text | null
    onRemoveNode?: (param: { node: Node | void, charater: string }) => void
  }

  export interface TypewriterState {
    elements: {
      container: HTMLDivElement
      cursor: HTMLSpanElement
      wrapper: HTMLSpanElement
    }
  }

  export default class Typewriter {
    constructor(element: HTMLElement, options?: TypewriterOptions)
    typeString(str: string): this
    pauseFor(ms: number): this
    deleteChars(count: number): this
    deleteAll(speed?: number): this
    start(): this
    stop(): this
    callFunction(
      callback: (state: TypewriterState) => void,
      thisArg?: Record<string, any>,
    ): this
    changeDelay(delay: number): this
    changeDeleteSpeed(speed: number): this
    pause(): this
    pasteString(string: string, node: HTMLElement | null): this
  }
}
