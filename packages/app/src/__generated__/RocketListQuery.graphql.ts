/**
 * @generated SignedSource<<e73edba3807023f4fa9da7ff037e9a47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RocketListQuery$variables = {};
export type RocketListQueryVariables = RocketListQuery$variables;
export type RocketListQuery$data = {
  readonly rockets: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"Rocket_rocket">;
  } | null> | null;
};
export type RocketListQueryResponse = RocketListQuery$data;
export type RocketListQuery = {
  variables: RocketListQueryVariables;
  response: RocketListQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RocketListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Rocket",
        "kind": "LinkedField",
        "name": "rockets",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Rocket_rocket"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RocketListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Rocket",
        "kind": "LinkedField",
        "name": "rockets",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "97a4d623af0b958652efa71de8bdd7a9",
    "id": null,
    "metadata": {},
    "name": "RocketListQuery",
    "operationKind": "query",
    "text": "query RocketListQuery {\n  rockets {\n    ...Rocket_rocket\n    id\n  }\n}\n\nfragment Rocket_rocket on Rocket {\n  name\n}\n"
  }
};

(node as any).hash = "77fa272e89bf404cbb4fdd19837546a7";

export default node;
