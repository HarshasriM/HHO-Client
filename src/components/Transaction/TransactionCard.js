import React from 'react';
import { Typography, ListItem, ListItemText, Avatar, Divider } from '@mui/material';
import { CreditScore, MoneyOff, VolunteerActivism } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';

function TransactionCard({ transaction }) {
  const getCardColor = (type) => {
    switch (type) {
      case 'donation':
        return '#fa9a34'; // Orange for donate
      case 'credit':
        return '#4caf50'; // Green for credit
      case 'debit':
        return '#f44336'; // Red for debit
      default:
        return '#e0e0e0'; // Default gray if type doesn't match
    }
  };

  const getTransactionTypeText = (type) => {
    switch (type) {
      case 'credit':
        return 'Credited From';
      case 'debit':
        return 'Debited To';
      case 'donation':
        return 'Donated To';
      default:
        return 'Transaction';
    }
  };

  return (
    <>
      <React.Fragment key={transaction.id}>
        <ListItem>
          <Avatar
            sx={{
              bgcolor: getCardColor(transaction.transaction_type),
              marginRight: 2,
            }}
          >
            {transaction.transaction_type === 'credit' && <CreditScore />}
            {transaction.transaction_type === 'debit' && <MoneyOff />}
            {transaction.transaction_type === 'donation' && <VolunteerActivism />}
          </Avatar>
          <ListItemText
            primary={`${getTransactionTypeText(transaction.transaction_type)} `}
            secondary={transaction.purpose}
            primaryTypographyProps={{
              sx: { fontFamily: '"Playpen Sans", cursive', fontSize: '16px' },
            }}
            secondaryTypographyProps={{
              sx: { fontFamily: '"Playpen Sans", cursive', fontSize: '14px', color: 'gray' },
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: getCardColor(transaction.transaction_type), // Set amount text color to yellow
              fontWeight: 'bold',
              fontFamily: '"Playpen Sans", cursive',
            }}
          >
            ₹{transaction.amount}
            {transaction.transaction_type === 'credit' && (
              <AddCircleIcon sx={{ color: '#4caf50', marginLeft: 1 }} />
            )}
            {transaction.transaction_type === 'debit' && (
              <RemoveCircleIcon sx={{ color: '#f44336', marginLeft: 1 }} />
            )}
            {transaction.transaction_type === 'donation' && (
              <HandshakeIcon sx={{ color: '#fa9a34', marginLeft: 1 }} />
            )}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography sx={{ fontFamily: '"Playpen Sans", cursive', fontSize: '13px', margin: 0 }}>
            {transaction.date.split('T')[0]}
          </Typography>
        </ListItem>
        <Divider />
      </React.Fragment>
    </>
  );
}

export default TransactionCard;
