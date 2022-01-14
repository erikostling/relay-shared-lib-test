/**
 * @generated SignedSource<<72939220c9f23619d04c190efde52b66>>
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
    readonly id: string | null;
    readonly name: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"Rocket_rocket">;
  } | null> | null;
};
export type RocketListQueryResponse = RocketListQuery$data;
export type RocketListQuery = {
  variables: RocketListQueryVariables;
  response: RocketListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
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
          },
          (v0/*: any*/),
          (v1/*: any*/)
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
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "93884b032bb8eb3451c6f8e3985ade42",
    "id": null,
    "metadata": {},
    "name": "RocketListQuery",
    "operationKind": "query",
    "text": "query RocketListQuery {\n  rockets {\n    ...Rocket_rocket\n    id\n    name\n  }\n}\n\nfragment Rocket_rocket on Rocket {\n  name\n}\n"
  }
};
})();

(node as any).hash = "fe0e9f761ab3cc390a6b196b8286724a";

export default node;
