import React, { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQuery } from 'react-query'
import { useApp } from '../../../state/AppContext'
import { get } from '../../../utils/useFetch'
import { useTodos } from '../../../utils/useTodos'
import { TextField } from '../../molecules/fields/_generic/TextField'

const Fallback = () => <div>something went wrong</div>

export const Home = () => {
  // const { state } = useApp()
  // const todos = useQuery('todos', () =>
  //   fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) =>
  //     response.json()
  //   )
  // )
  // console.log(todos.data?.body)

  const { isLoading, isError, isFetching, isSuccess, data, error } = useTodos()

  if (isLoading) return <h1>loading...</h1>

  if (isError && error)
    return <h1>error{console.log(8, error.status, error.body)}</h1>

  if (isSuccess) return <h1>success{console.log(7, data)}</h1>

  return (
    <div>
      {/* <form>
        <TextInput id="firstName" label="First name" />
        <TextInput id="lastName" label="Last name" />
        <button type="submit">submit</button>
      </form>

      <button
        onClick={async () => {
          try {
            const a = await get<{
              body: string
              title: string
              id: number
              userId: number
            }>('https://jsonplaceholder.typicode.com/posts/112121212')
            console.log(5, a.parsedBody?.title)
          } catch (response) {
            console.log(2, response.status)
          }
        }}
      >
        click
      </button> */}
      {/* <ErrorBoundary FallbackComponent={Fallback}></ErrorBoundary> */}
    </div>
  )
}
