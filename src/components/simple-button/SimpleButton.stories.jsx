import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text} from '@storybook/addon-knobs';
// import {withInfo} from '@storybook/addon-info';
import SimpleButton from './SimpleButton';

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
};

storiesOf('SimpleButton', module)
    .addDecorator(withKnobs)
    .add('blue', () => (
        <SimpleButton type={'blue'}>{text('text', '确定')}</SimpleButton>
    ))
    .add('red', () => (
        <SimpleButton type={'red'}>{text('text', '确定')}</SimpleButton>
    ))
    .add('blue-border', () => (
        <SimpleButton type={'blue-border'}>{text('text', '确定')}</SimpleButton>
    ))
    .add('grey-border', () => (
        <SimpleButton type={'grey-border'}>{text('text', '确定')}</SimpleButton>
    ))
    .add('black', () => (
        <SimpleButton type={'black'}>{text('text', '确定')}</SimpleButton>
    ));
