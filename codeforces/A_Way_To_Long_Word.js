// Problem Code: 71A
function main() {
    let n = 4;
    let words = ['word',
        'localization',
        'internationalization',
        'pneumonoultramicroscopicsilicovolcanoconiosis'
    ]
    let result = Array(n);
    for (let i = 0; i < n; i++) {
        if (words[i].length > 10) {
            let innerLength = words[i].length - 2;
            let newWord = words[i][0] + innerLength + words[i][words[i].length-1];
            result[i] = newWord;
            console.log(result[i])
        } else {
            result[i] = words[i];
            console.log(result[i]);
        }
    }
}

main();