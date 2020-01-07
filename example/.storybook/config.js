import { configure } from '@storybook/react'
import '../src/global.css'

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
