declare module 'shake.js' {
  interface ShakeOptions {
    threshold?: number
    timeout?: number
  }

  class Shake {
    constructor(options?: ShakeOptions)
    start(): void
    stop(): void
    addEventListener(event: string, callback: () => void): void
    removeEventListener(event: string, callback: () => void): void
  }

  export default Shake
} 