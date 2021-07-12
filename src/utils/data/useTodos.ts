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

export const useTodos = () => useQuery<Body, InfoError>('todos', fetcher)

// let body: Body
// try {
//   body = await response.json()
// } catch (ex) {
//   console.log('ex,', ex, response)
//   // throw response
//   throw new Error(JSON.stringify(response))
// }

// if (!response.ok) {
//   console.log('not okay', response)
//   throw new Error(JSON.stringify(response))
// }
// console.log('body', body)
// return body
