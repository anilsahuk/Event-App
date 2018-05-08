"use strict";
function restrictedWords(words) {
    return function (control) {
        if (!words)
            return null;
        var invalidwords = words;
        //.map (w=> control.value.includes(w) ? w:null,)
        //.filter(w => w !=null)
        return invalidwords && invalidwords.length > 0
            ? { 'restrictedwords': invalidwords.join(', ') }
            : null;
    };
}
exports.restrictedWords = restrictedWords;
//# sourceMappingURL=restricted-words.validator.js.map