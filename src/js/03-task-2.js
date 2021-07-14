const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
    return Promise.resolve(
        allUsers.map(user =>
          user.name === userName ? { ...user, active: !user.active } : user),
      );
    };
  
  // The function should work like this
  toggleUserState(users, 'Mango').then(console.table);
  toggleUserState(users, 'Ajax').then(console.table); 