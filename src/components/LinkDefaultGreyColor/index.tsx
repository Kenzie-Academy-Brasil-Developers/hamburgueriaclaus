import { Link } from 'react-router-dom';
import { LinkStyle } from './styles';
import { iLinkDefaultColor } from './types';

export function LinkDefaultGreyColor({ children , action , destination , classList }: iLinkDefaultColor) {
    return (
        <LinkStyle className={classList} to={destination} onClick={action}>
            {children}
        </LinkStyle>
    )
}