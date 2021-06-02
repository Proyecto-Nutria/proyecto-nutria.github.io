import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

const UserLoading = () => {
  return (
    <UIMainContainer>
      <Skeleton />
    </UIMainContainer>
  );
};

export default UserLoading;
