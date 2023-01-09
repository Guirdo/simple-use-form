import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'main.js'),
      name: 'Simple useForm',
      fileName: 'simple-use-form',
    },
  },
  test: {
    reporters: ["verbose"],
    dir: resolve(__dirname,'__test__'),
    environment: 'happy-dom'
  }
})