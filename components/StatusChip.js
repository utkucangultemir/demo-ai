// /components/StatusChip.js
import React from 'react';
import { Chip, View } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function StatusChip({ status, onPress }) {
  if (!status) return null;

  const label = status === 'processing' ? 'Creating Your Design...' : 'Your Design is Ready!';

  return (
      <Chip
        mode="outlined"
        onPress={onPress}
        style={[styles.chip, status === 'done' && styles.doneChip]}
        icon={status === 'processing' ? 'clock' : 'check'}
        textStyle={{ color: status === 'processing' ? 'white' : 'white' }}
      >
        {label}
      </Chip>
  );
}

const styles = StyleSheet.create({
  chip: {
    marginTop: 0,
    backgroundColor: '#27272A',
  },
 doneChip: {
  backgroundColor: '#943DFF',
}
});
