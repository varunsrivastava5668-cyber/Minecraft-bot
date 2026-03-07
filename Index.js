const bedrock = require('bedrock-protocol');
const client = bedrock.createClient({
  host: 'donutsmp.net',
  port: 19132,
  username: '.bad_dawn123',
  offline: true
});
client.on('spawn', () => {
  console.log('Bot is online!');
  setTimeout(() => {
    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: client.username,
      xuid: '',
      platform_chat_id: '',
      message: '/warp afk'
    });
  }, 3000);
});
client.on('kick', (reason) => { console.log('Kicked:', reason); });
client.on('error', (err) => { console
                             
