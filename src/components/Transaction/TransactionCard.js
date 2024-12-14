import React from 'react';
import {  Typography, ListItem, ListItemText, Avatar, Divider } from '@mui/material';
import { CreditScore, MoneyOff, VolunteerActivism} from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';
function TransactionCard({transaction}) {
    const getCardColor = (type) => {
        switch (type) {
          case 'donate':
            return '#fa9a34'; // Purple for donate
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
                  primary={`${transaction.transaction_type}ed On`}
                  secondary={transaction.purpose}
                  primaryTypographyProps={{ sx: { fontFamily: '"Playpen Sans", cursive', fontSize: '16px' } }}
                  secondaryTypographyProps={{ sx: { fontFamily: '"Playpen Sans", cursive', fontSize: '14px', color: 'gray' } }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: getCardColor(transaction.type), fontWeight: 'bold', fontFamily: '"Playpen Sans", cursive' }}
                >
                  ₹{transaction.amount}
                  {transaction.transaction_type === 'credit' && <AddCircleIcon />}
                  {transaction.transaction_type === 'debit' && <RemoveCircleIcon />}
                  {transaction.transaction_type === 'donation' && <HandshakeIcon />}
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