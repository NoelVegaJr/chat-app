import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BottomListForm from '../BottomListForm';

const NewRoomForm = ({ onClose }: { onClose: () => void }) => {
  const [newRoomName, setNewRoomName] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation(insertNewRoom, {
    onSuccess: async () => {
      await queryClient.cancelQueries(['rooms']);
      // Create optimistic todo
      onClose();
      // Add optimistic todo to todos list
      queryClient.invalidateQueries(['rooms']);
    },
  });

  async function insertNewRoom() {
    try {
      const response = await fetch('http://localhost:9000/api/rooms', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newRoomName }),
      });
      const data = await response.json();
      setNewRoomName('');
    } catch (err) {
      console.log(err);
    }
  }
  const handleCreateNewRoom = async (e: Event) => {
    console.log('creating new room');
    e.preventDefault();
    mutation.mutate();
    setNewRoomName('');
  };
  return <BottomListForm onSubmit={handleCreateNewRoom} onClose={onClose} />;
};

export default NewRoomForm;
