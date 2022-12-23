import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Familie1 from './teresa/_DSC2559.jpg';
import Familie2 from './teresa/_DSC2568.jpg';
import Familie3 from './teresa/_DSC3221.jpg';
import Familie4 from './teresa/_DSC3005.jpg';
import Familie5 from './teresa/_DSC2632.jpg';
import Familie6 from './teresa/_DSC2917.jpg';
import Familie7 from './teresa/_DSC2839.jpg';
import Familie8 from './teresa/_DSC3289.jpg';
import Familie9 from './teresa/_DSC3083.jpg';
import Familie10 from './teresa/_DSC3143.jpg';
import Familie11 from './teresa/_DSC3133.jpg';
import Familie12 from './teresa/_DSC2886.jpg';
import Familie13 from './teresa/_DSC2758.jpg';
import Familie14 from './teresa/_DSC3076.jpg';
import Familie15 from './teresa/_DSC2774.jpg';
import Familie16 from './teresa/_DSC2809.jpg';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList() {
    return (
        <ImageList
            sx={{ width: "100%", height: 450, marginLeft: "auto", marginRight: "auto"  }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: Familie1,
        title: 'Breakfast',
        rows: 4,
        cols: 2,
    },
    {
        img: Familie2,
        title: 'Burger',
        rows: 2,

    },
    {
        img: Familie3,
        title: 'Camera',
        rows: 2,

    },
    {
        img: Familie4,
        title: 'Coffee',
        cols: 2,
        rows: 2,

    },
    {
        img: Familie5,
        title: 'Hats',
        cols: 2,
        rows: 2,

    },
    {
        img: Familie6,
        title: 'Honey',
        author: '@arwinneil',
        rows: 4,
        cols: 2,
    },
    {
        img: Familie7,
        title: 'Basketball',
        rows: 2,

    },
    {
        img: Familie8,
        title: 'Fern',
        rows: 2,
    },
    {
        img: Familie9,
        title: 'Mushrooms',
        rows: 4,
        cols: 2,
    },
    {
        img: Familie10,
        title: 'Tomato basil',
        rows: 2,

    },
    {
        img: Familie11,
        title: 'Sea star',
        rows: 2,

    },
    {
        img: Familie3,
        title: 'Bike',
        cols: 2,
        rows: 2,

    },
];