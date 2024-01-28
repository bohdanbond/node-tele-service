const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
app.use(bodyParser.json())

const sendMessage = async (name, phone) => {
    let text = '<b>Заявка</b>\n';
    text += `<b>Імʼя:</b> ${name}\n`;
    text += `<b>Телефон:</b> ${phone}`;

    try {
        await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
            chat_id: '@landingromashop',
            parse_mode: 'HTML',
            text: 'test'
        })
    } catch (e) {
        console.log(e)
    }
}

app.post('/sendMessage', async (req, res) => {
    const { name, phone } = req.body;
    await sendMessage(name, phone);
    res.end();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})