// for-each loop , avl only on arrays
const lang = ['java', 'c++', 'html', 'css', 'javascript'];

lang.forEach( (item, index, arr) => {
    console.log(item, index ,arr);
} );



function printMe(val) {
    console.log(val);
}

lang.forEach(printMe); // passing printMe function as a reference



const countries = [
    {
        country: 'India',
        lang: 'Hindi'
    },
    {
        country: 'Russia',
        lang: 'Russian'
    },
    {
        country: 'Japan',
        lang: 'Japanese'
    }
];

countries.forEach( (item) => {
    console.log(item.country, item.lang);
});