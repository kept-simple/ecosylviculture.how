import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from the custom domain https://ecosylviculture.how/ (see public/CNAME),
  // so assets and routes sit at the root. Change to '/<repo-name>/' if the site
  // ever moves back to a github.io project URL.
  base: '/',
  plugins: [react()],
})
