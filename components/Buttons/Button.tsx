import React, { FunctionComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { FaStumbleuponCircle } from 'react-icons/fa';

import { COLOR } from '../../styles/colors';

type Props = {
    children: any,
    color: string,
    disabled?: boolean,
    fullWidth?: boolean,
    size: string,
    href?: any,
    target?: any,
    loading?: boolean,
    variant?: string
};


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.span`
    animation: ${rotate} 3s linear infinite;
    margin-right: 8px;
`;

const ButtonBase = css`

    :disabled {
        background-color: grey;
        color: #fff;
        cursor: not-allowed;
        border: none;
    }

    display: flex;
    justify-content: center;

    font-weight: 600;
    cursor: pointer;
`;

const PrimaryButton = styled.button<Props>`
    background-color: ${COLOR.BROWN_DARK};
    color: ${(props: Props) => props.color};
    border: none;

    border-radius: 16px;
    width: ${(props: Props) => props.fullWidth ? "100%" : "128px"};
    padding: ${(props: Props) => props.size === "small" ?  8 : 12}px;

    :hover {
        color: "#f1f1f1";
    }

    :focus {
        color: #fff;
    }

    ${ButtonBase};

    a {
        color: ${(props: Props) => props.color};
        text-decoration: none;   
    }
`;

const TertiaryButton = styled.button<Props>`
    width: ${(props: Props) => props.fullWidth ? "100%" : "128px"};
    padding: ${(props: Props) => props.size === "small" ?  8 : 12}px;
    border: 2px solid ${COLOR.GREY_DARK};
    border-radius: 16px;

    color: ${(props: Props) => props.color};    
    background-color: #fff;

    :hover {
        color: ${COLOR.BLUE_VERY_DARK};
    }

    :focus {
        color: #000;
    }

    ${ButtonBase};

    a {
        color: ${(props: Props) => props.color};
        text-decoration: none;
    }
`;

const Button: FunctionComponent<Props> = ({children, color, disabled, fullWidth, href, target, loading, size, variant }: Props) => {
    if (variant === 'primary') {
        if (loading) {
            return <PrimaryButton color={color} disabled={disabled} fullWidth={fullWidth} size={size}>
                {href ? <><StyledSpinner><FaStumbleuponCircle size="14px" color="red" /></StyledSpinner><a href={target ? target : "#"} >{children}</a></>
                      : <><StyledSpinner><FaStumbleuponCircle size="14px" color="red" /></StyledSpinner>{children}</>
                }
            </PrimaryButton>;
        }
        return (<PrimaryButton color={color} disabled={disabled} fullWidth={fullWidth} size={size}>
                {href ? <><a href={target ? target : "#"} >{children}</a></>
                      : <>{children}</>
                }
                </PrimaryButton>);
    } else {
        if(loading) {
            return <TertiaryButton color={color} disabled={disabled} fullWidth={fullWidth} size={size}>
                {href ? <><StyledSpinner><FaStumbleuponCircle size="14px" color="red" /></StyledSpinner><a href={target ? target : "#"} >{children}</a></>
                      : <><StyledSpinner><FaStumbleuponCircle size="14px" color="red" /></StyledSpinner>{children}</>
                }
            </TertiaryButton>;
        }
        return (
            <TertiaryButton color={color} disabled={disabled} fullWidth={fullWidth} size={size}>
                {href ? <><a href={target ? target : "#"} >{children}</a></>
                      : <>{children}</>
                }
            </TertiaryButton>
        );
    }
}

export default Button;