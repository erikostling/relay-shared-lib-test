import React from "react";
import { graphql, useFragment } from "react-relay";

export type RocketProps = {
  rocketRef: any
}

export const Rocket = (props: RocketProps) => {
  const rocket = useFragment(
    graphql`
      fragment Rocket_rocket on Rocket {
        name
      }
    `,
    props.rocketRef,
  )

  return <div>RocketX</div>
}
