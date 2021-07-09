import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'HATS',
                imageUrl: 'https://upgradedhome.com/wp-content/uploads/2021/03/shutterstock_1790483456.jpg',
                id: 1
            },
            {
                title: 'JACKETS',
                imageUrl: 'https://media.wired.com/photos/606ce52941bf976945513469/191:100/w_2086,h_1092,c_limit/Gear-Cloudburst-Jacket---Mandarin-Front-square-grey-back.jpg',
                id: 2
            },
            {
                title: 'SNEAKERS',
                imageUrl: 'https://media.gq.com/photos/5d93aa2c636d4800084025ae/16:9/pass/sneakers.jpg',
                id: 3
            },
            {
                title: 'WOMENS',
                imageUrl: 'https://c4.wallpaperflare.com/wallpaper/828/961/289/photography-women-model-landscape-car-mercedes-benz-vintage-car-see-through-clothing-wallpaper-preview.jpg',
                size:'large',
                id: 4
            },
            {
                title: 'MENS',
                imageUrl: 'https://images.unsplash.com/photo-1550246140-29f40b909e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
                size:'large',
                id: 5
            }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, size, id }) => 
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                )}
            </div>
            )
    }
}

export default Directory;