import React, { ReactNode, useMemo } from 'react'
import { ReactRelayContext } from 'react-relay'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

let relayEnvironment

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise
function fetchQuery(operation, variables, cacheConfig, uploadables) {
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
    // Create a network layer from the fetch function
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  })
}

export function useEnvironment() {
  const store = useMemo(() => createEnvironment(), [])
  return store
}

export type RelayEnvironmentProviderProps = {
  children: ReactNode
}

export const RelayEnvironmentProvider = (props: RelayEnvironmentProviderProps) => {
  const { children } = props
  
  const environment = useEnvironment()

  return (
    <ReactRelayContext.Provider value={{ environment }}>
      {children}
    </ReactRelayContext.Provider>
  )
}
