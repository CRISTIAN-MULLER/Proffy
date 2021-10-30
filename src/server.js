const proffys = [
  {
    name: 'Albert Eintein',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/250px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
    whatsapp: '995181848',
    bio: 'Albert Einstein (Ulm, 14 de março de 1879 — Princeton, 18 de abril de 1955) foi um físico teórico alemão que desenvolveu a teoria da      relatividade geral, um dos pilares da física moderna ao lado da mecânica quântica. Embora mais conhecido por sua fórmula de equivalência massa-energia, E=mc² — que foi chamada de "a equação mais famosa do mundo" —, foi laureado com o Prêmio Nobel de Física de 1921 "por suas contribuições à física teórica" e, especialmente, por sua descoberta da lei do efeito fotoelétrico, que foi fundamental no estabelecimento da teoria quântica.',
    subject: 'Física',
    cost: '100',
    weekday: [0],
    time_from: [],
    time_to: [],
  },
];

const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
];

const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

function pageLanding(req, res) {
  return res.render('index.html');
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render('study.html', { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  const data = req.query;

  const isNotEmpty = Object.keys(data).length != 0;

  if (isNotEmpty) {
    data.subject = getSubject(data.subject);

    proffys.push(data);
    return res.redirect('/study');
  }

  return res.render('give-classes.html', { subjects, weekdays });
}
const express = require('express');
const server = express();

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  .use(express.static('public'))
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .listen(5500);

console.log('Server Rodando em http://localhost:5500/');
