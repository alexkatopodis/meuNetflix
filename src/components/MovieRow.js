/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
    const [scrollx, setscrollx] = useState(0) ;
    

    const handleLeftArrow = () => {
     let x = scrollx + Math.round(window.innerWidth / 2);
     if(x > 0) {
         x = 0;
     }
     setscrollx(x);
    }

    const handleRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let listW = items && items.results && items.results.length * 150;
        if((window.innerWidth - listW) > x) {
          x = (window.innerWidth - listW) - 60;
        }
        setscrollx(x);
    }


    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>

            <div className='movieRow--right'onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>


            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft:scrollx,
                   
                    
                    width: items && items.results && items.results.length * 150
                    
                    }}>
                    {items && items.results && items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}