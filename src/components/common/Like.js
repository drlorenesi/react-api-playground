import React, { Fragment } from 'react';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

function Like(props) {
  if (props.liked === true)
    return (
      <Fragment>
        <FontAwesomeIcon
          style={{ cursor: 'pointer' }}
          onClick={props.onClick}
          icon={faHeartSolid}
        />
      </Fragment>
    );
  return (
    <Fragment>
      <FontAwesomeIcon
        style={{ cursor: 'pointer' }}
        onClick={props.onClick}
        icon={faHeartRegular}
      />
    </Fragment>
  );
}

export default Like;
