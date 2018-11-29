import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text, radios, boolean} from '@storybook/addon-knobs';
import styled from 'styled-components';
import SimpleButton from './SimpleButton';
const Wrapper = styled.div`
    display: flex;
`;
const Spacer = styled.div`
    width: 1rem;
`;
export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
};
const types = ['blue', 'red', 'blue-border', 'grey-border', 'black'];
storiesOf('SimpleButton', module)
    .addDecorator(withKnobs)
    .add('demo', () => (
        <SimpleButton
            type={radios('type', types)}
            isDisabled={boolean('isDisabled', false)}
        >
            按钮
        </SimpleButton>
    ));
