const request = require ('request');
const cheerio = require('cheerio');

const url = 'https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/2019';

request(url, function(err, response, html) {
    if(!err) {
        const results =[];
        let $ = cheerio.load(html);
        $('.tabela-expandir')
        .find('tr')
        .each(function(i) {
            console.log(i+1);
        })
    } else {
        console.log("Houve um problema ao abrir a url solicitada");
    }
})