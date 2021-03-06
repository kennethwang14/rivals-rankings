// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Link } from './styles';

const NavItem = ({ url, label, active }: { url: string, label: string, active: boolean }) => (
    <ListItem active={active}>
        <Link active={active} href={url}>
            {label}
        </Link>
    </ListItem>
);
NavItem.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};

export default NavItem;
