import "./commands/utils";
import "./commands/actionSequences";
import "./commands/exempleApi"
import "cypress-plugin-steps";

Cypress.on(
    "uncaught:exception",
    (
        _err,
        _runnable
    ) => false
);
