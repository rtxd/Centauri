export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  try {
    // Fetch data from NASA API
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${config.nasaApiKey}`
    )
    
    if (!response.ok) {
      throw new Error(`NASA API responded with status: ${response.status}`)
    }
    
    const data = await response.json()
    
    return {
      success: true,
      data
    }
  } catch (error) {
    console.error('Error fetching NASA APOD:', error)
    
    // Return error response
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching NASA picture of the day'
    })
  }
}) 