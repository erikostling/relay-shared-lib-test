/**
 * @generated SignedSource<<981af6295ecef445de5575ad02e4df35>>
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
          (v0/*: any*/),
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
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "53334e5ecf58d882fb1db6d523fb1cdc",
    "id": null,
    "metadata": {},
    "name": "RocketListQuery",
    "operationKind": "query",
    "text": "query RocketListQuery {\n  rockets {\n    id\n    ...Rocket_rocket\n  }\n}\n\nfragment Rocket_rocket on Rocket {\n  name\n}\n"
  }
};
})();

(node as any).hash = "6eb3961c8f1aa771f92b35fd4b68d93e";

export default node;
