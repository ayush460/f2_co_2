// JavaScript - script.js
const users = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
  ];
  
  function renderUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
  
    users.forEach(user => {
        
      const userCard = document.createElement("div");
        
      userCard.className = "user-card";
      userCard.innerHTML = `
      <p>${user.id}.</p>
        <p> Name:${user.name}</p>
        <p>Age: ${user.age}</p>
        <p>Profession: ${user.profession}</p>
      `;
  
      userList.appendChild(userCard);
    });
  }
  
  function filterCards() {
    const selectedProfession = document.getElementById("profession").value;
    
    if (!selectedProfession) {
      alert("Please select a profession before clicking the filter button.");
      return;
    }
    
    const filteredUsers = users.filter(user => user.profession === selectedProfession);
    renderFilteredUsers(filteredUsers);
  }
  
  function renderFilteredUsers(filteredUsers) {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
  
    filteredUsers.forEach(user => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.innerHTML = `
       
        <p>${user.id}.</p>
        <p> Name:${user.name}</p>
        <p> Age: ${user.age}</p>
        <p> Profession: ${user.profession}</p>
      `;
  
      userList.appendChild(userCard);
    });
  }
  
  function addUser() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const profession = document.getElementById("newProfession").value;
  
    if (!name || !age || !profession) {
      alert("Please fill in all the fields.");
      return;
    }
  
    const id = users.length + 1;
    const newUser = { id, name, age, profession };
    users.push(newUser);
    renderUsers();
  
    // Clear input fields after adding a user
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("newProfession").value = "";
  }
  
  renderUsers();
  