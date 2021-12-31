import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'

const Like = (props) => {
    const { liked, onClick } = props;
    const icon = liked ? fasHeart : farHeart;
    return (
        <FontAwesomeIcon
            icon={icon}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        />
    );
}

export default Like;