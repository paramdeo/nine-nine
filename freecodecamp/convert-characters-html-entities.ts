/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str: string): string {

    function entitize(char: string) {
        switch (char) {
            case '"': {
                return '&quot;'
                break
            }
            case '&': {
                return '&amp;'
                break
            }
            case '<': {
                return '&lt;'
                break
            }
            case '>': {
                return '&gt;'
                break
            }
            case '\'': {
                return '&apos;'
                break
            }
            default: {
                return char
            }
        }
    }

    let result = [],
        strlen = str.length

    for (let i = 0; i < strlen; i++) {
        result.push(entitize(str[i]))
    }

    return result.join('')
}

console.log(
    convertHTML("Dolce & Gabbana"), // Dolce &amp; Gabbana
    convertHTML("Hamburgers < Pizza < Tacos"), // Hamburgers &lt; Pizza &lt; Tacos
    convertHTML("Sixty > twelve"), // Sixty &gt; twelve
    convertHTML('Stuff in "quotation marks"'), // Stuff in &quot;quotation marks&quot;
    convertHTML("Schindler's List"), // Schindler&apos;s List
    convertHTML("<>") // &lt;&gt;
)
