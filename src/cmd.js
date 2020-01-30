const { createManager } = require("./utils");
const logger = require("./logger");

(async function() {
    try {
        const manager = await createManager();

        manager.regenerateFiles();
    } catch (e) {
        console.error(e.stack);
        logger.error(e.toString());
    }
})();
