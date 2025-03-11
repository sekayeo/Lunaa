require('module-alias/register');
require('@lib/version');

(async () => {
    try {
        const { getAccessToken } = require('@lib/startup');
        await getAccessToken();
    } catch (err) {
        console.error('Error dalam proses getAccessToken:', err.message);
    }
})();



