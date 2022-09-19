import './preIndex.css';
import { useEffect, useState } from 'react';

import Header from '../header/Header.js';
import Stories from '../stories/stories.js';
import Feed from '../feed/feed.js'
import Post from '../post/post.js'


export default function PreIndex(){
   


 

    return(
        <div className='preIndex'>
            <Header />
            <div className='desktop'>
                <Stories />
                <Feed />
                <div className='postM'>
                    <Post />
                </div>
            </div>
            
        </div>
    )
}