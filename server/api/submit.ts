export default defineEventHandler(async (event) => {
  // Get the request body
  const body = await readBody(event)
  
  // Process the data
  return {
    received: body,
    status: 'success'
  }
}) 