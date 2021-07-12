import React from 'react'
// import { ErrorBoundary } from 'react-error-boundary'
// import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
// import { useApp } from '../../../state/AppContext'
// import { get } from '../../../utils/useFetch'
// import { useTodos } from '../../../utils/useTodos'
// import { TextField } from '../../molecules/fields/_generic/TextField'

const Fallback = () => <div>something went wrong</div>

export const Home = () => {
  // const { state } = useApp()
  // const todos = useQuery('todos', () =>
  //   fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) =>
  //     response.json()
  //   )
  // )
  // console.log(todos.data?.body)

  // const { isLoading, isError, isFetching, isSuccess, data, error } = useTodos()

  // if (isLoading) return <h1>loading...</h1>

  // if (isError && error)
  //   return <h1>error{console.log(8, error.status, error.body)}</h1>

  // if (isSuccess) return <h1>success{console.log(7, data)}</h1>

  return (
    <div>
      <Link to="/simple-form">Simple form</Link>
      <br />
      <Link to="/form-with-static-default-values">
        Form with static default values
      </Link>
      <br />
      <Link to="/form-with-async-default-values">
        Form with async default values
      </Link>
      <br />
      <Link to="/components-with-async-default-values">
        Components with async default values
      </Link>
      <br />
      <Link to="/read-only-form">Read only form</Link>
      <br />
      <Link to="/edit-cancel-mode-form">Edit cancel mode form</Link>
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
