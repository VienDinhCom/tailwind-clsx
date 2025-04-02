# tailwind-clsx

Utility function for conditionally joining and merging Tailwind CSS classes without style conflicts.

```ts
import { twc } from 'tailwind-clsx';

// Merge
twc('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]');
//=> 'hover:bg-dark-red p-3 bg-[#B91C1C]'

// Strings (variadic)
twc('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
twc({ foo: true, bar: false, baz: isTrue() });
//=> 'foo baz'

// Objects (variadic)
twc({ foo: true }, { bar: false }, null, { '--foobar': 'hello' });
//=> 'foo --foobar'

// Arrays
twc(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
twc(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
twc('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya');
//=> 'foo bar hello world cya'
```

## API

### twc(...input)

Returns: `String`

#### input

Type: `Mixed`

The `twc` function can take **_any_** number of arguments, each of which can be an Object, Array, Boolean, or String.

> **Important:** _Any_ falsey values are discarded!<br>Standalone Boolean values are discarded as well.

```js
twc(true, false, '', null, undefined, 0, NaN);
//=> ''
```

## Tailwind Support

Here some additional (optional) steps to enable classes autocompletion using `twc` with Tailwind CSS.

1. [Install the "Tailwind CSS IntelliSense" Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. Add the following to your [`settings.json`](https://code.visualstudio.com/docs/getstarted/settings):

```json
{
  "tailwindCSS.experimental.classRegex": [["twc\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]]
}
```
