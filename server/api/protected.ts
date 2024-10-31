export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  // Access environment variables
  const apiSecret = config.apiSecret
  
  return {
    protected: true
  }
}) 