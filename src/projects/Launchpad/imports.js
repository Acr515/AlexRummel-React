/**
 * A dictionary of file names in the assets folder, minus the file extension. Used to avoid polluting the screen .jsx file for a portfolio entry.
 */
const imports = {
    "wordmark": require('./assets/wordmark.svg'),
    "bubble_animation": require('./assets/bubble_animation.webm'),
    "stars": require('./assets/stars.png'),
    "image_bubbles": require('./assets/image_bubbles.png'),
    "project_scope_background": require('./assets/project_scope_background.jpg'),
    "screen-modules": require('./assets/prototype/screen-modules.png'),
    "screen-steps": require('./assets/prototype/screen-steps.png'),
    "screen-steps2": require('./assets/prototype/screen-steps2.png'),
    "screen-tasks": require('./assets/prototype/screen-tasks.png'),
    "screen-tasks2": require('./assets/prototype/screen-tasks2.png'),
    "screen-welcome": require('./assets/prototype/screen-welcome.png'),
};

export default imports;