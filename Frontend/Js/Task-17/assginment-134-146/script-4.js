let reExp = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? = begins with http or https
// :\/\/ = after that we have ://
// (?:[-\w]+\.)? = a : after it a string contains  (- + any word) once or more and after it there is a dot (the braces are optional)
// ([-\w]+) = contains the string (- + any word) once or more inside braces ()
// \.\w+ = a dot after it a word
// (?:\.\w+)? = a : then a dot after it a word (the braces are optional)
// \/?.* == ends with a slash (or not) after it a dot (maybe onec or more than once or none)
// the modifire i = case insensitive