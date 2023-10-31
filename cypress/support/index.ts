import "./commands/utils";
import "./commands/actionSequences";
import "./commands/exempleApi";
// "import" with `@ts-ignore`
// @see error 2306 https://github.com/microsoft/TypeScript/blob/3fcd1b51a1e6b16d007b368229af03455c7d5794/src/compiler/diagnosticMessages.json#L1635
// @ts-ignore
import registerCypressGrep from "@cypress/grep";
registerCypressGrep();
