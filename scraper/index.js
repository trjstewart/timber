const cheerio = require('cheerio');
const rp = require('request-promise');
const fs = require('fs');

// const url = 'https://api.bugwood.org/rest/api/image/.json';
const url = 'https://www.forestryimages.org/browse/catthumb.cfm?cat=57';
const imgClass = 'img-responsive';

// const baseUrl = '//bugwoodcloud.org/images/384x256/';

const $ = cheerio.load(url);
$('img').attr('class', imgClass).html;

rp(url)
    .then(html => {
        const $ = cheerio.load(html);
        const body = $('.container');
        // const imagecontainer = $('div').attr('id', 'imagecontainer').children();

        fs.writeFileSync('index.html', body);
    })
    .catch(err => {
        console.log('error encountered: ', err);
    });


    