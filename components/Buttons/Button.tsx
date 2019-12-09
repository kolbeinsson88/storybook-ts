import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import { FaGgCircle } from 'react-icons/fa';

type Props = {
    color: string,
    disabled: boolean,
    fullWidth: boolean,
    size: string,
    href?: any,
    target?: any,
    loading?: boolean,
    variant?: string
};

// const Base = ``;

const PrimaryButton = styled.button<Props>`
    color: ${(props: Props) => props.color};
    background-color: black;

    border-radius: 16px;
    padding: ${(props: Props) => props.size === "small" ?  8 : 12}px;
    width: ${(props: Props) => props.fullWidth ? "100%" : "128px"};

    border: none;
    font-weight: 600;

    cursor: pointer;

    :hover {
        color: grey;
    }

    :focus {
        color: #fff;
    }

    :disabled {
        background-color: grey;
        color: #fff;
        cursor: not-allowed;
    }

    position: relative;

    span {
        position: absolute;
        top: 32%;
        left: 15%;
    }

    a {
        color: ${props => props.color};
        text-decoration: none;   
    }
`;

const TertiaryButton = styled.button<Props>`

    width: ${(props: Props) => props.fullWidth ? "100%" : "128px"};
    color: ${(props: Props) => props.color};    

    background-color: #fff;
    padding: ${(props: Props) => props.size === "small" ?  8 : 12}px;

    border: 1px solid black;
    border-radius: 16px;
    font-weight: 600;

    border-radius: 16px;

    cursor: pointer;

    :hover {
        color: grey;
    }

    :focus {
        color: #000;
    }

    :disabled {
        background-color: grey;
        color: #fff;
        cursor: not-allowed;
    }

    position: relative;

    span {
        position: absolute;
        top: 32%;
        left: 15%;
    }

    a {
        color: ${props => props.color};
        text-decoration: none;
    }
`;

const Button: FunctionComponent<Props> = ({children, color, disabled, fullWidth, href, target, loading, size, variant }) => {
    if (variant === 'primary') {
        if (loading) {
                return (<PrimaryButton color={color} disabled={disabled} fullWidth={fullWidth} size={size}>
                    {href ? <><span><FaGgCircle color="white" /></span><a href={target ? target : "#"} >{children}</a></>
                          : <><span><FaGgCircle color="white" /></span>{children}</>
                    }
                </PrimaryButton>);
        }
        return <PrimaryButton color={color} disabled={disabled} fullWidth={fullWidth} size={size}>{children}</PrimaryButton>;
    } else if (variant === 'tertiary') {
        if(loading) {
            return <TertiaryButton color={color} disabled={disabled} fullWidth={fullWidth} size={size}>
                {href ? <><span><FaGgCircle color="red" /></span><a href={target ? target : "#"} >{children}</a></>
                    : <><span><FaGgCircle color="red" /></span>{children}</>
                }
            </TertiaryButton>;
        }
        return <TertiaryButton color={color} disabled={disabled} fullWidth={fullWidth} size={size}>{children}</TertiaryButton>;
    }
    return <PrimaryButton color={color} disabled={disabled} fullWidth={fullWidth} size={size}>{children}</PrimaryButton>;
}

export default Button;