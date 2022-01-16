import React, {useContext} from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import { directoryContex } from '../../contexts/directory/directory.contex';

const Directory = () => {
    const {sections} = useContext(directoryContex);

    return(
        <div className='directory-menu'>
            {
                sections.map( ({id, ...otherSectionProps}) => (
                    <MenuItem 
                        key={id} 
                        {...otherSectionProps}
                    />
                ))
            }
        </div>
    );
}

export default Directory;