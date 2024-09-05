import useUserFetcher from './useUserFetcher';

const User = () => {
  const { currentUser, nextUser, prevUser } = useUserFetcher();

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>User Profile</h1>
      <img src={currentUser.picture.large} alt="User Profile" />
      <h2>{`${currentUser.name.title} ${currentUser.name.first} ${currentUser.name.last}`}</h2>
      <div>
        <button onClick={prevUser} disabled={!currentUser}>
          Previous
        </button>
        <button onClick={nextUser} style={{ marginLeft: '10px' }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default User;
