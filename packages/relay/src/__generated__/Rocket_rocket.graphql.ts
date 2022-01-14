/**
 * @generated SignedSource<<86aa0e97738f5e37f1eb3dc1baa90df3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Rocket_rocket$data = {
  readonly name: string | null;
  readonly " $fragmentType": "Rocket_rocket";
};
export type Rocket_rocket = Rocket_rocket$data;
export type Rocket_rocket$key = {
  readonly " $data"?: Rocket_rocket$data;
  readonly " $fragmentSpreads": FragmentRefs<"Rocket_rocket">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Rocket_rocket",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Rocket",
  "abstractKey": null
};

(node as any).hash = "1b4baabfe84ed08bde11cfaf97d6effc";

export default node;
