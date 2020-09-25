import React, { Fragment } from 'react';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Modal({ data }) {
  // const [id, setId] = useState(data);
  // console.log(id);
  const test = () => {
    console.log(data);
  };

  return (
    <Fragment>
      <button className='btn btn-danger' onClick={test}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </Fragment>
  );

  // return (
  //   <Fragment>
  //     <button
  //       type='button'
  //       className='btn btn-danger'
  //       data-toggle='modal'
  //       data-target='#exampleModal'
  //     >
  //       <FontAwesomeIcon icon={faTrashAlt} />
  //     </button>
  //     <div
  //       className='modal fade'
  //       id='exampleModal'
  //       tabIndex='-1'
  //       aria-labelledby='exampleModalLabel'
  //       aria-hidden='true'
  //     >
  //       <div className='modal-dialog'>
  //         <div className='modal-content'>
  //           <div className='modal-header'>
  //             <h5 className='modal-title' id='exampleModalLabel'>
  //               Confirm Delete
  //             </h5>
  //             <button
  //               type='button'
  //               className='close'
  //               data-dismiss='modal'
  //               aria-label='Close'
  //             >
  //               <span aria-hidden='true'>&times;</span>
  //             </button>
  //           </div>
  //           <div className='modal-body'>
  //             Are you sure you want to delete this item {data}?
  //           </div>
  //           <div className='modal-footer'>
  //             <button
  //               type='button'
  //               className='btn btn-secondary'
  //               data-dismiss='modal'
  //             >
  //               Cancel
  //             </button>
  //             <button type='button' className='btn btn-danger'>
  //               Delete
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Fragment>
  // );
}

export default Modal;
