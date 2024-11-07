# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

TypeScript is a superset of JavaScript that introduces static typing to help developers write safer and more reliable code. However, since JavaScript is dynamically typed, TypeScript must also accommodate scenarios where types are unknown or ambiguous at compile-time.

In TypeScript, the static typing system can catch many issues at compile-time. However, some scenarios require additional runtime checks because TypeScript cannot always infer the specific type within a union of possible types. 