import {configure, addDecorator} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import {withInfo} from '@storybook/addon-info';
setOptions({
    // addonPanelInRight: true,
    name: 'vrxd'
});
addDecorator(withInfo({inline: true, header: false, source: false}));
const req = require.context('../src', true, /.stories.jsx?$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
