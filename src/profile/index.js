import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { UserProfile } from './user-profile';
import { Tabs } from './tabs';
import { fetchProfile, leavePage } from './model';

export const Profile = ({ match: { params: username } }) => {
  const isLoading = useStore(fetchProfile.pending);

  useEffect(() => {
    fetchProfile(username);

    return () => leavePage();
  }, [username]);

  return (
    <section className="container profile-page">
      <div className="profile-header">
        {isLoading ? <div>Loading ...</div> : <UserProfile />}
      </div>
      <main className="profile-main">
        <Tabs />
      </main>
    </section>
  );
};
