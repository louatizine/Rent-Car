/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Spinner, IconButton, useToast } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const AllUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  // Fetch the list of users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/get-users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUsers(data.users);
        } else {
          toast({
            title: "Error",
            description: data.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load users",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [toast]);

  const getRoleColor = (role) => {
    switch (role) {
      case 'client':
        return 'blue';
      case 'agency':
        return 'green';
      default:
        return 'gray';
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/delete-user/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming the token is stored in localStorage
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: "User deleted successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        // Remove the user from the local state after deletion
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      } else {
        toast({
          title: "Error",
          description: data.message || "An unexpected error occurred.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete user",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEdit = (userId) => {
    // Navigate to the edit page for the user (assuming you have a route for this)
    window.location.href = `/edit-user/${userId}`;
  };

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <Box width="80%" mx="auto" mt="50px">
      <Text fontSize="2xl" mb="4" textAlign="center">All Users</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Full Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Created On</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user._id}>
              <Td>{user.fullName}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Text color={getRoleColor(user.role)} fontWeight="bold">
                  {user.role}
                </Text>
              </Td>
              <Td>{new Date(user.createdOn).toLocaleDateString()}</Td>
              <Td>
                {/* Delete button */}
                <IconButton
                  aria-label="Delete user"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleDelete(user._id)}
                  mr={2}
                />
                {/* Edit button */}
                <IconButton
                  aria-label="Edit user"
                  icon={<EditIcon />}
                  colorScheme="blue"
                  onClick={() => handleEdit(user._id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AllUsersPage;
