const fs = require('fs/promises')
const path = require('path')

const currentDirectory = __dirname

async function readJSFiles () {
  try {
    const files = await fs.readdir(currentDirectory)

    const jsFiles = files.filter(file => path.extname(file) === '.js')

    for (const file of jsFiles) {
      const content = await fs.readFile(
        path.join(currentDirectory, file),
        'utf-8'
      )
      console.log(`Вміст файлу ${file}:\n`, content)
    }
  } catch (err) {
    console.error('Помилка при обробці файлів:', err)
  }
}

readJSFiles()
