const bedrock = require('bedrock-protocol');

function startBot() {
  const client = bedrock.createClient({
    host: 'donutsmp.net',
    port: 19132,
    username: '.total_gaming_91',
    offline: false,
    version: '1.21.11',
  });

  client.on('spawn', () => {
    console.log('✅ Spawned on DonutSMP!');

    setInterval(() => {
      client.queue('player_action', {
        runtime_id: client.entityId,
        action: 'start_sneak',
        position: { x: 0, y: 0, z: 0 },
        result_position: { x: 0, y: 0, z: 0 },
        face: 0,
      });
    }, 4 * 60 * 1000);
  });

  client.on('disconnect', (reason) => {
    console.log('❌ Disconnected:', reason);
    setTimeout(() => startBot(), 10000);
  });

  client.on('error', (err) => console.error('⚠️', err.message));
}

startBot();
