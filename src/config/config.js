import settings from "./config.json"

const config = {
  apiUrl: import.meta.env.VITE_API_URL || settings.apiUrl,
}

export default config
