import React, { useState, useEffect } from 'react';

function UserManagement() {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = formData;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      if (users.find(u => u.username === formData.username)) {
        alert('Username already exists');
        return;
      }
      setUsers([...users, formData]);
    }
    setFormData({ username: '', password: '' });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <section>
      <h2 className='target'>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button type="submit">{editingIndex !== null ? 'Update User' : 'Add User'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default UserManagement;