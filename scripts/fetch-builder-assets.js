const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'dbabd433e7c44afe8251fc59e05b4be9';

// Функция для выполнения HTTP запросов
const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', reject);
  });
};

// Функция для скачивания файла
const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

// Основная функция
async function fetchBuilderAssets() {
  try {
    // Получаем все ассеты через REST API
    const response = await makeRequest(`https://cdn.builder.io/api/v1/assets?apiKey=${API_KEY}`);
    const assets = response.results || [];
    console.log('Found assets:', assets.length);

    // Создаем директорию для иконок, если её нет
    const iconsDir = path.join(__dirname, '../public/icons');
    if (!fs.existsSync(iconsDir)) {
      fs.mkdirSync(iconsDir, { recursive: true });
    }

    // Фильтруем и скачиваем только SVG иконки
    const svgAssets = assets.filter(asset => 
      asset.name && (
        asset.name.includes('dashboard') ||
        asset.name.includes('product') ||
        asset.name.includes('customers') ||
        asset.name.includes('help') ||
        asset.name.includes('chevron') ||
        asset.name.includes('trend')
      )
    );

    console.log('Found SVG assets:', svgAssets.length);

    // Скачиваем каждую иконку
    for (const asset of svgAssets) {
      const fileName = `${asset.name}.svg`;
      const filePath = path.join(iconsDir, fileName);
      console.log(`Downloading ${fileName}...`);
      await downloadFile(asset.url, filePath);
    }

    console.log('All assets downloaded successfully!');
  } catch (error) {
    console.error('Error fetching assets:', error);
  }
}

// Запускаем скрипт
fetchBuilderAssets();
