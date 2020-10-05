import React from 'react';
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../../../../DataLayer';

// Styled components
import StyledSidebarItems from './StyledSidebarItems';

export const SidebarOptions = ({ key, link, id, name, Icon }) => {
    const [{}, dispatch] = useDataLayerValue();

    return (
        <>
            <Link
                key={key && key}
                to={link}
                className='sidebarItems'
                onClick={() => {
                    let state = link.split('/');
                    dispatch({ type: 'SET_MAINAPPSTATE', state: state[1] });
                    if (!id) return;

                    dispatch({ type: 'SET_PLAYLIST_ID', playlistId: id });
                }}
            >
                {Icon && <Icon className='sidebarItems__icon' />}
                {Icon ? (
                    <h4 className='sidebarItems__option'>{name}</h4>
                ) : (
                    <p className='sidebarItems__option'>{name}</p>
                )}
            </Link>
        </>
    );
};

const SidebarItems = ({ title, children }) => {
    return (
        <StyledSidebarItems>
            {title && <h1 className='sidebarItems__title'>{title}</h1>}
            {children}
        </StyledSidebarItems>
    );
};

export default SidebarItems;
