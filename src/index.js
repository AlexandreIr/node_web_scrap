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
            const escudo = $(this)
            .find('td')
            .eq(0)
            .find('img')
            .attr('src');
            const position = $(this)
            .find('td')
            .eq(0)
            .find('b')
            .text()
            .trim();
            const club = $(this)
            .find('td')
            .eq(0)
            .find('span')
            .eq(1)
            .text()
            .trim();
            const points = $(this)
            .find('td')
            .eq(0)
            .text()
            .trim();
            const games = $(this)
            .find('td')
            .eq(1)
            .text()
            .trim();
            const wins = $(this)
            .find('td')
            .eq(2)
            .text()
            .trim();
            const draws = $(this)
            .find('td')
            .eq(3)
            .text()
            .trim();
            const loses = $(this)
            .find('td')
            .eq(4)
            .text()
            .trim();
        console.log(escudo);
        })
    } else {
        console.log("Houve um problema ao abrir a url solicitada");
    }
})