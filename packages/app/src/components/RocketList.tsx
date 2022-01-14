import * as React from "react";
import { graphql, useLazyLoadQuery } from "react-relay/hooks";
import { RocketListQuery } from "../__generated__/RocketListQuery.graphql";
import { Rocket } from "relay";

const RocketList = () => {
  const data = useLazyLoadQuery<RocketListQuery>(
    graphql`
      query RocketListQuery {
        rockets {
          id
          ...Rocket_rocket
        }
      }
    `,
    {},
  );

  return (
    <>
      <h1>Rockets</h1>
      {data.rockets.map((rocket) => (
        <div key={rocket.id}>
          <Rocket rocketRef={rocket} />
        </div>
      ))}
    </>
  );
};

export default RocketList;
