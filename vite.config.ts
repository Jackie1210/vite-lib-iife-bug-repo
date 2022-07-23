import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'MyLib',
      formats: ['iife', 'umd', 'es'],
      // the proper extensions will be added
      fileName: 'my-lib'
    }
  }
})