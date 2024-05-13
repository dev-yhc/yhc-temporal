import { proxyActivities } from "@temporalio/workflow";

import type * as activities from "./activities";

const { hello } = proxyActivities<typeof activities>({
  retry: {
    initialInterval: "15s",
    backoffCoefficient: 2,
    maximumInterval: "1m",
    maximumAttempts: 100,
  },
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function helloWorld(name: string): Promise<string> {
  hello()
  return "success"
}