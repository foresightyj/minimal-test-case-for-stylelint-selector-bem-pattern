const allowedTags = ["h[1-6]", "ul", "li", "a"].join("|")
const allowedThirdPartyClasses = ["ui-", "sa-", "fa-"].map(p=> `\\.${p}[\w_-]+`).join("|")
const optionalAttributeSelector ="(\\[.+)?"

module.exports = {
    "plugins": [
        "stylelint-selector-bem-pattern"
    ],
    "rules": {
        "plugin/selector-bem-pattern": {
            componentName: "^[A-Za-z-]+$",
            componentSelectors: {
                initial: `^\\.{componentName}(?:(__|--)\\w[\\w-_]*)?$`,
                // "combined": `^(\\.{componentName}(?:(__|--)\\w[\\w-_]*)?|${allowedTags}|${allowedThirdPartyClasses})${optionalAttributeSelector}$`,
                combined: `^(${allowedTags}|${allowedThirdPartyClasses})${optionalAttributeSelector}$`
            }
        }
    }
}
