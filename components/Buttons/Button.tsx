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

const ButtonBase = `

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

    font-weight: 600;
    cursor: pointer;
`;

const PrimaryButton = styled.button<Props>`
    background-color: black;
    color: ${(props: Props) => props.color};
    border: none;

    border-radius: 16px;
    width: ${(props: Props) => props.fullWidth ? "100%" : "128px"};
    padding: ${(props: Props) => props.size === "small" ?  8 : 12}px;

    :hover {
        color: grey;
    }

    :focus {
        color: #fff;
    }


    ${ButtonBase};

    a {
        color: ${props => props.color};
        text-decoration: none;   
    }
`;

const TertiaryButton = styled.button<Props>`
    width: ${(props: Props) => props.fullWidth ? "100%" : "128px"};
    padding: ${(props: Props) => props.size === "small" ?  8 : 12}px;
    border: 1px solid black;
    border-radius: 16px;

    color: ${(props: Props) => props.color};    
    background-color: #fff;

    :hover {
        color: grey;
    }

    :focus {
        color: #000;
    }

    ${ButtonBase};

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