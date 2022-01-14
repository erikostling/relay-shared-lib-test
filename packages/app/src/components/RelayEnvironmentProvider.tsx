import React, { ReactNode } from 'react'
import { RelayEnvironmentProvider as RRRelayEnvironmentProvider } from 'react-relay'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise
function fetchQuery(operation: any, variables: any) {
  return fetch('https://api.spacex.land/graphql/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }, // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then((response) => response.json())
}

function createEnvironment() {
  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  })
}

export type RelayEnvironmentProviderProps = {
  children: ReactNode
}

export const RelayEnvironmentProvider = (
  props: RelayEnvironmentProviderProps,
) => {
  const { children } = props
  
  const environment = createEnvironment()

  return (
    <RRRelayEnvironmentProvider environment={environment}>
      {children}
    </RRRelayEnvironmentProvider>
  )
}
