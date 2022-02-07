const pdf = require('pdf-creator-node')
const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(
  path.join(__dirname, 'public/template.html'),
  'utf-8'
)

var options = {
  format: 'A4',
  orientation: 'portrait',
  border: '10mm',
  header: {
    height: '45mm',
    contents:
      '<div style="text-align: center;">Desenvolvido por Renan Marcos Soder</div>'
  },
  footer: {
    height: '28mm',
    contents: {
      first: 'NodeJS - Gerando PDF',
      2: 'Second page', // Any page number is working. 1-based index
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: 'Last Page'
    }
  }
}

var users = [
  {
    name: 'Ayrton Senna',
    age: '34'
  },
  {
    name: 'Lewis Hamilton',
    age: '28'
  },
  {
    name: 'Allan Prost',
    age: '40'
  }
]

var document = {
  html: html,
  data: {
    users
  },
  path: './listUsers.pdf',
  type: ''
}

pdf
  .create(document, options)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  })
