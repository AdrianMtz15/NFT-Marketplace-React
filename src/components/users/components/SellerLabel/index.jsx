import React from 'react';
import { useUsersActions } from "../../hooks/useUsersActions";
import { useAppSelector } from '../../../../utils/hooks/useStore';
import { Button } from '../../../global/Button';

import PropTypes from 'prop-types';

function SellerLabel({
  sellerData
}) {
  const [currentUser, setCurrentUser] = React.useState(null);
  const users = useAppSelector((state) => state.users);

  const { updateAllUsers } = useUsersActions();

  //  Function - Used for set follow and unfollow seller properties
  const searchCurrentUser = () => {
    const currentUserIndex = users.findIndex(obj => {
      return obj.id === sellerData.id;
    });

    setCurrentUser(users[currentUserIndex]);
  }

  const toggleFollow = () => {
    const newUsers = [...users];
    const userUpdated = {
      ...currentUser,
      follow: !currentUser.follow
    }

    const index = newUsers.findIndex(obj => {
      return obj.id === userUpdated.id;
    });

    newUsers[index] = userUpdated;

    updateAllUsers(newUsers);
  }

  React.useEffect(() => {
    searchCurrentUser();
  },[users]);
  
  const textBtn = sellerData.follow ? 'Following' : 'Follow'
  const textColorBtn = sellerData.follow ? '[#0997FF]' : 'white'
  const bgColorBtn = sellerData.follow ? 'white' : '[#0997FF]'
  const borderBtn = sellerData.follow ? '[#0997FF]' : 'null'

  return(
    <div className='flex flex-row w-full items-center'>
      <section className='flex flex-row w-[75%]' >
        <img className='w-[50px] h-[50px] mr-2' src={sellerData.profileImg} />

        <div className='flex flex-col items-start justify-center leading-snug'>
          <h2 className="font-sans text-[1.8rem] font-bold text-black">
            {`${sellerData.name.firstName} ${sellerData.name.lastName}`}
          </h2>
          
          <p className="font-sans text-[1.4rem] text-[#9B9DA0]">@{sellerData.username}</p>
        </div>
      </section>
      
      <section onClick={toggleFollow} className='w-[35%] rounded-[10px] border-none'>
        <Button 
          text={textBtn} 
          textColor={textColorBtn} 
          bgColor={bgColorBtn} 
          borderColor={borderBtn}
        />
      </section>
    </div>
  );
}

SellerLabel.propTypes = {
  sellerData: PropTypes.object,
};

export {
  SellerLabel
}