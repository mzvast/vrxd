// @flow
/**
 * @file [SimpleButton]
 * @author [wangyang65]
 * @email [wangyang65@baidu.com]
 * @create date 2018-07-31 15:26:40
 */
/* eslint-disable babel/new-cap,operator-linebreak,fecs-export-on-declare */
import React, {PureComponent} from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    position: relative;
    align-items: center;
    box-sizing: border-box;
    background: ${props => props.background};
    border: ${props => props.border};
    cursor: pointer;
    border-radius: 0.31rem;
    :hover {
        background: ${props => props.hoverBackground};
    }
    :active {
        background: ${props => props.activeBackground};
    }
`;
const Label = styled.div`
    font-family: NotoSansCJKsc-Medium;
    font-size: ${props => props.fontSize || '1.25rem'};
    /* color: #ffffff; */
    color: ${props => props.color};
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: ${props => props.fontSize || '1.25rem'};
`;

type Props = {
    height: string,
    width: string,
    fontSize: string,
    children: any,
    // 按钮类型
    type: 'blue' | 'red' | 'blue-border' | 'grey-border' | 'black',
    isDisabled: boolean,
    onClick: Function
};
type State = {};
class SimpleButton extends PureComponent<Props, State> {
    state: State;

    static defaultProps = {
        height: '3rem',
        width: '6.56rem',
        type: 'blue',
        isDisabled: false,
        onClick() {}
    };

    render() {
        const {children, type, isDisabled, fontSize, ...props} = this.props;
        let background = '#ffffff';
        let hoverBackground;
        let activeBackground;
        let border = 'none';
        let labelColor = '#FFFFFF';
        if (!this.props.isDisabled) {
            switch (type) {
                case 'blue':
                    background = '#0E99F6';
                    hoverBackground = '#4BB4FF';
                    activeBackground = '#0171C1';
                    break;
                case 'red':
                    background = '#F65A54';
                    hoverBackground = '#DD514B';
                    break;
                case 'blue-border':
                    border = '0.09rem solid #6E77F6';
                    labelColor = '#6E77F6';
                    hoverBackground = 'rgba(110,119,246,0.10)';
                    break;
                case 'grey-border':
                    border = '0.09rem solid  #999DB5';
                    hoverBackground = ' #DDDDDD';
                    labelColor = '#666666';
                    activeBackground = '#BDBDBD';
                    break;
                case 'black':
                    background = '#454545';
                    hoverBackground = '#292929';
                    break;
                default:
                    break;
            }
        } else {
            background = hoverBackground = '#CCCCCC';
        }

        return (
            <Wrapper
                {...props}
                background={background}
                border={border}
                hoverBackground={hoverBackground}
                {...{activeBackground: activeBackground || hoverBackground}}
                onClick={
                    !isDisabled ? this.props.onClick.bind(this) : undefined
                }
            >
                <Label color={labelColor} {...{fontSize}}>
                    {children}
                </Label>
            </Wrapper>
        );
    }
}
SimpleButton.displayName = 'SimpleButton';
export default SimpleButton;
