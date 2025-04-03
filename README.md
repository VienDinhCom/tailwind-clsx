# tailwind-clsx

Utility function for conditionally joining and merging Tailwind CSS classes without style conflicts.

# Installation

For Tailwind CSS v4

```
npm i tailwind-clsx@~4.0.0
```

For Tailwind CSS v3

```
npm i tailwind-clsx@~3.0.0
```

For Tailwind CSS v2

```
npm i tailwind-clsx@~2.0.0
```

# Demonstration

```ts
import { cn } from 'tailwind-clsx';

// Merge
cn('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]');
//=> 'hover:bg-dark-red p-3 bg-[#B91C1C]'

// Strings (variadic)
cn('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
cn({ foo: true, bar: false, baz: isTrue() });
//=> 'foo baz'

// Objects (variadic)
cn({ foo: true }, { bar: false }, null, { '--foobar': 'hello' });
//=> 'foo --foobar'

// Arrays
cn(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
cn(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
cn('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya');
//=> 'foo bar hello world cya'
```

## API

### cn(...input)

Returns: `String`

#### input

Type: `Mixed`

The `cn` function can take **_any_** number of arguments, each of which can be an Object, Array, Boolean, or String.

> **Important:** _Any_ falsey values are discarded!<br>Standalone Boolean values are discarded as well.

```js
cn(true, false, '', null, undefined, 0, NaN);
//=> ''
```

## Tailwind Support

Here some additional (optional) steps to enable classes autocompletion using `cn` with Tailwind CSS.

1. [Install the "Tailwind CSS IntelliSense" Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. Add the following to your [`settings.json`](https://code.visualstudio.com/docs/getstarted/settings):

```json
{
  "tailwindCSS.experimental.classRegex": [["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]]
}
```
