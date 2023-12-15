const fs = require('fs');
const crypto = require('crypto');

// quiz.txt 파일을 생성하고 쓰기
fs.writeFile('./quiz.txt', '푸바오와 이별 채비하는 강바오\n ...', (err) => {
    if (err) {
        console.error(err);
        throw err;
    }

    // createReadStream을 사용하여 파일 읽기
    const readStream = fs.createReadStream('./quiz.txt', { highWaterMark: 16 });
    const data = [];

    readStream.on('data', (chunk) => {
        data.push(chunk);
        console.log('data', chunk, chunk.length);
    });

    readStream.on('end', () => {
        const fileContent = Buffer.concat(data).toString();
        console.log('end', fileContent);

        // 시스템 변수에서 key와 iv 얻기
        const key = process.env.YOUR_CRYPTO_KEY; 
        const iv = process.env.YOUR_CRYPTO_IV;   
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

        // 파일 내용을 암호화
        let encryptedResult = cipher.update(fileContent, 'utf8', 'base64');
        encryptedResult += cipher.final('base64');
        console.log('암호화된 데이터', encryptedResult);

        // createWriteStream을 사용하여 암호화된 데이터를 quiz-chipher.txt에 쓰기
        const writeStream = fs.createWriteStream('./quiz_cipher.txt');

        writeStream.on('finish', () => {
            console.log('종료.....');
        });

        writeStream.write(encryptedResult, 'base64');
        writeStream.end();
    });

    readStream.on('error', (err) => {
        console.error(err);
    });
});
// 에러..