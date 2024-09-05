const fs = require('node:fs')
const path = require('node:path')

const currentDirectory1 = __dirname

fs.readdir(currentDirectory1, (err, files) => {
  if (err) {
    return console.error('Помилка при читанні директорії:', err)
  }

  console.log('Список файлів у поточній папці (асинхронно):')
  files.forEach(file => {
    console.log(file)
  })
})

const currentDirectory2 = __dirname

try {
  const files = fs.readdirSync(currentDirectory2)
  console.log('Список файлів у поточній папці (синхронно):')
  files.forEach(file => {
    console.log(file)
  })
} catch (err) {
  console.error('Помилка при читанні директорії:', err)
}
