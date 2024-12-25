import React from 'react';
import {
  Typography,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  IconButton,
  Box,
} from '@mui/material';
import {
  CreditScore,
  MoneyOff,
  VolunteerActivism,
  Edit,
  Delete,
  AddCircle,
  RemoveCircle,
  Handshake,
} from '@mui/icons-material';

function TransactionCard({ transaction, onEdit, onDelete }) {
  const getCardColor = (type) => {
    switch (type) {
      case 'donate':
        return '#fa9a34'; // Orange for donate
      case 'credit':
        return '#4caf50'; // Green for credit
      case 'debit':
        return '#f44336'; // Red for debit
      default:
        return '#e0e0e0'; // Default gray if type doesn't match
    }
  };

  return (
    <>
      <React.Fragment key={transaction._id}>
        <ListItem
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 2,
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
            }}
          >
            {/* Avatar */}
            <Avatar
              sx={{
                bgcolor: getCardColor(transaction.transaction_type),
                marginRight: 2,
                flexShrink: 0,
              }}
            >
              {transaction.transaction_type === 'credit' && <CreditScore />}
              {transaction.transaction_type === 'debit' && <MoneyOff />}
              {transaction.transaction_type === 'donation' && <VolunteerActivism />}
            </Avatar>

            {/* Transaction Details */}
            <Box sx={{ flex: 1 }}>
              <ListItemText
                primary={`${transaction.transaction_type}ed On`}
                secondary={transaction.purpose}
                primaryTypographyProps={{
                  sx: { fontFamily: '"Playpen Sans", cursive', fontSize: '16px' },
                }}
                secondaryTypographyProps={{
                  sx: { fontFamily: '"Playpen Sans", cursive', fontSize: '14px', color: 'gray' },
                }}
              />
              <Typography
                sx={{
                  fontFamily: '"Playpen Sans", cursive',
                  fontSize: '13px',
                  marginTop: 1,
                  color: 'gray',
                }}
              >
                {transaction.date.split('T')[0]}
              </Typography>
            </Box>

            {/* Amount */}
            <Typography
              variant="body1"
              sx={{
                color: getCardColor(transaction.transaction_type),
                fontWeight: 'bold',
                fontFamily: '"Playpen Sans", cursive',
                marginLeft: 2,
              }}
            >
              ₹{transaction.amount}
              {transaction.transaction_type === 'credit' && <AddCircle />}
              {transaction.transaction_type === 'debit' && <RemoveCircle />}
              {transaction.transaction_type === 'donation' && <Handshake />}
            </Typography>
          </Box>

          {/* Right Icons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 2,
            }}
          >
            <IconButton
              color="primary"
              sx={{
                backgroundColor: '#f1f1f1',
                '&:hover': { backgroundColor: '#e0e0e0' },
                marginBottom: 1,
              }}
              onClick={() => onEdit(transaction)}
            >
              <Edit />
            </IconButton>
            <IconButton
              color="secondary"
              sx={{
                backgroundColor: '#f1f1f1',
                '&:hover': { backgroundColor: '#e0e0e0' },
              }}
              onClick={() => onDelete(transaction._id)}
            >
              <Delete />
            </IconButton>
          </Box>
        </ListItem>
        <Divider />
      </React.Fragment>
    </>
  );
}

export default TransactionCard;
