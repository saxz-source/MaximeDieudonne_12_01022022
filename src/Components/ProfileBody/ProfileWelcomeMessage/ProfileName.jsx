import React from 'react';
import { useEffect, useState } from 'react';
import { getName } from '../../../API/APICalls';

const ProfileName = ({userName}) => {




  return <span className='firstName'>{userName}</span>;
};

export default ProfileName;
