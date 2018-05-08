"use strict";
function restrictedWords(words) {
    return function (control) {
        if (!words)
            return null;
        var invalidwords = words
            .map(function (w) { return control.value.includes(w) ? w : null; })
            .filter(function (w) { return w != null; });
        return invalidwords && invalidwords.length > 0
            ? { 'restrictedwords': invalidwords.join(', ') }
            : null;
    };
}
exports.restrictedWords = restrictedWords;
//# sourceMappingURL=restricted-words.validators.js.map