import "./commands/utils";
import "./commands/actionSequences";
import "./commands/exempleApi"


Cypress.on(
    "uncaught:exception",
    (
        _err,
        _runnable
    ) => false
);