import { useRouter } from '#app'

interface PageMeta {
  tags?: string[];
  // Add other meta properties as needed
  description?: string;
  image?: string;
}

interface Page {
  path: string;
  name: string | undefined;
  title: string;
  meta: PageMeta;
}

export function usePages(directory?: string) {
  const router = useRouter()
  
  // Get all routes
  const routes = router.getRoutes()
  
  // Filter and transform routes into usable page data
  const pages = routes
    .filter(route => {
      const baseFilter = !route.path.includes(':') && // Remove dynamic routes
                        !route.path.includes('*') && // Remove catch-all routes
                        !route.path.startsWith('/api/') // Remove API routes

      if (!directory) {
        return baseFilter && route.path !== '/' // Remove home page for all pages
      }

      return baseFilter && 
             route.path.startsWith(`/${directory}/`) && 
             route.path !== `/${directory}`
    })
    .map(route => {
      // Get meta from route.meta if it exists
      const routeMeta = (route.meta || {}) as PageMeta;
      
      return {
        path: route.path,
        name: route.name,
        title: route.path
          .split('/')
          .pop()
          ?.split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ') || '',
        meta: {
          tags: routeMeta.tags || [],
          description: routeMeta.description,
          image: routeMeta.image
        }
      }
    })

  return {
    pages
  }
} 