import React from 'react'
import { Video } from 'grommet';

export const Vid = (video) => {
    console.log('video', video.video)
    return (
        <Video loop={true} autoPlay={true} mute={true} controls="over" fit="cover">
            <source key="video" src={video.video} type="video/mp4" />
        </Video>
    )
}

export default Vid
