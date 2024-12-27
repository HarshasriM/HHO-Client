import React from 'react';
import {
  Typography,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  IconButton,
  Box,
  useMediaQuery,
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
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

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
      <React.Fragment key={transaction._id}>
        <ListItem
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? 1 : 2,
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
                marginRight: isMobile ? 1 : 2,
                width: isMobile ? 30 : 40,
                height: isMobile ? 30 : 40,
              }}
            >
              {transaction.transaction_type === 'credit' && <CreditScore fontSize={isMobile ? 'small' : 'medium'} />}
              {transaction.transaction_type === 'debit' && <MoneyOff fontSize={isMobile ? 'small' : 'medium'} />}
              {transaction.transaction_type === 'donation' && (
                <VolunteerActivism fontSize={isMobile ? 'small' : 'medium'} />
              )}
            </Avatar>

            {/* Transaction Details */}
            <Box sx={{ flex: 1 }}>
              <ListItemText
                primary={`${getTransactionTypeText(transaction.transaction_type)} `}
                secondary={transaction.purpose}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: '"Playpen Sans", cursive',
                    fontSize: isMobile ? '12px' : '16px',
                  },
                }}
                secondaryTypographyProps={{
                  sx: {
                    fontFamily: '"Playpen Sans", cursive',
                    fontSize: isMobile ? '10px' : '14px',
                    color: 'gray',
                  },
                }}
              />
              <Typography
                sx={{
                  fontFamily: '"Playpen Sans", cursive',
                  fontSize: isMobile ? '10px' : '13px',
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
                fontSize: isMobile ? '12px' : '16px',
                
              }}
            >
              ₹{transaction.amount}
              {transaction.transaction_type === 'credit' && <AddCircle fontSize={isMobile ? 'small' : 'medium'} />}
              {transaction.transaction_type === 'debit' && <RemoveCircle fontSize={isMobile ? 'small' : 'medium'} />}
              {transaction.transaction_type === 'donation' && <Handshake fontSize={isMobile ? 'small' : 'medium'} />}
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
                width: isMobile ? 28 : 40,
                height: isMobile ? 28 : 40,
              }}
              onClick={() => onEdit(transaction)}
            >
              <Edit fontSize={isMobile ? 'small' : 'medium'} />
            </IconButton>
            <IconButton
              color="secondary"
              sx={{
                backgroundColor: '#f1f1f1',
                '&:hover': { backgroundColor: '#e0e0e0' },
                width: isMobile ? 28 : 40,
                height: isMobile ? 28 : 40,
              }}
              onClick={() => onDelete(transaction._id)}
            >
              <Delete fontSize={isMobile ? 'small' : 'medium'} />
            </IconButton>
          </Box>
        </ListItem>
        <Divider />
      </React.Fragment>
    </>
  );
}

export default TransactionCard;
