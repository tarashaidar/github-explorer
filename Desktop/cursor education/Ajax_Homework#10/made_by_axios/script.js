const API = `https://test-users-api.herokuapp.com/users/`;
let usersCard = document.querySelector('#user_cards');
let users = [];

// const instanceGet = axios.create({
//     method: `GET`,
//     baseURL: `https://test-users-api.herokuapp.com/`,
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'}
//   });

//   const instanceDelete = axios.create({
//     method: `DELETE`,
//     baseURL: `https://test-users-api.herokuapp.com/users/`,
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'}
//   });

const getUsers= () => {
    return axios.get(API).then(res => {
        return res.data;
    }).then(user => {
        return user.data;
    })
    .catch(err => {
        console.log('Cant find users', err);
        return [];
    })
}

const renderUsers = () => {
    usersCard.innerHTML = ''
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user');
        
        const inputAge = document.createElement(`input`);
        inputAge.classList.add(`inputAge`);
        inputAge.type = 'number'
        inputAge.value = `${user.age}`;

        const inputName = document.createElement(`input`);
        inputName.classList.add(`inputName`);
        inputName.type = 'text'
        inputName.value = `${user.name}`;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove_button');
        removeBtn.innerHTML = 'X';
        removeBtn.addEventListener('click', () => {
            deleteUser(user.id, userItem)});

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save_button');
        saveBtn.innerHTML = '&#10003';
        saveBtn.addEventListener('click', createUser);

        userItem.append(saveBtn);
        userItem.append(removeBtn);
        userItem.append(inputAge);
        userItem.append(inputName);
        usersCard.append(userItem);
      });
    }

const loadUsers = async () => {
    users = await getUsers();
    renderUsers();
}

const deleteUser =  async (userId, userItem) => {
    try {
        const res = await axios.delete(API + userId);
        if (res.status !== 200) throw new Error();
        users = users.filter((user) => user.id !== userId);
        userItem.remove();
    } catch (err) {
        console.log(`Can't delete a user`, err);   
    }
}
//////create user in server
const createUser = () => {
    const name = document.querySelector(`#name`).value;
    const age = document.querySelector(`#age`).value;
    axios.post(API, {
        name,
        age
    }).then(res => {
         return res
    }).catch(err => {
        console.log(`Can't create user`, err);
    })
}
//////create user in html document
const createCard = () => {
    const name = document.querySelector(`#name`).value;
    const age = document.querySelector(`#age`).value;
        const user = {
            name,
            age
        };
          users.unshift(user)
          renderUsers();
}

document.addEventListener('DOMContentLoaded', () => {
    const load = document.querySelector('#load_users')
    load.addEventListener('click', loadUsers);
    const createUserBtn = document.querySelector('#create_user')
    createUserBtn.addEventListener('click', createCard);
  });