import { useQuery } from 'react-query'

interface Body {
  body: string
  title: string
  id: number
  userId: number
}

interface InfoError extends Error {
  body?: any
  status?: number
}

async function fetcher(): Promise<Body> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

  const body = await response.json()

  if (!response.ok) {
    const error: InfoError = new Error('Fetch error')
    error.body = body
    error.status = response.status
    throw error
  }

  return body
}

export const useBlogPost = () => useQuery<Body, InfoError>('blog-post', fetcher)
