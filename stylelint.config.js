const allowedPrimitiveTags = ["h[1-6]", "ul", "li", "a", "p", "label", "input", "textarea", "select", "option", "button", "fieldset"].map(t=>new RegExp(`^${t}$`));
const allowedThirdPartyClassPrefix = ["ui-", "sa-", "fa-"].map(p=> new RegExp(`^\\.${p}.+`));
const optionalAttributeSelector ="(\\[.+)?"

module.exports = {
    "plugins": [
        "stylelint-selector-bem-pattern"
    ],
    "rules": {
        "plugin/selector-bem-pattern": {
            "componentName": "^[A-Za-z]+",
            "componentSelectors": {
                "initial": `^\\.{componentName}(?:__.+|--.+|\\[.+)?$`,
                "combined": `^(\\.{componentName}(?:__.+|--.+)?)${optionalAttributeSelector}$`
            },
            // implicitComponents: ['**/module*.scss'],
            "utilitySelectors": "^\\.util-[a-z]+$",
            "ignoreSelectors": allowedPrimitiveTags.concat(allowedThirdPartyClassPrefix)
        }
    }
}
