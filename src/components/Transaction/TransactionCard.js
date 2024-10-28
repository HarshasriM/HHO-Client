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
                    bgcolor: getCardColor(transaction.type),
                    marginRight: 2,
                  }}
                >
                  {transaction.type === 'credit' && <CreditScore />}
                  {transaction.type === 'debit' && <MoneyOff />}
                  {transaction.type === 'donate' && <VolunteerActivism />}
                </Avatar>
                <ListItemText
                  primary={`${transaction.type}ed On`}
                  secondary={transaction.description}
                  primaryTypographyProps={{ sx: { fontFamily: '"Playpen Sans", cursive', fontSize: '16px' } }}
                  secondaryTypographyProps={{ sx: { fontFamily: '"Playpen Sans", cursive', fontSize: '14px', color: 'gray' } }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: getCardColor(transaction.type), fontWeight: 'bold', fontFamily: '"Playpen Sans", cursive' }}
                >
                  ₹{transaction.amount}
                  {transaction.type === 'credit' && <AddCircleIcon />}
                  {transaction.type === 'debit' && <RemoveCircleIcon />}
                  {transaction.type === 'donate' && <HandshakeIcon />}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography sx={{ fontFamily: '"Playpen Sans", cursive', fontSize: '13px', margin: 0 }}>
                  {transaction.date}
                </Typography>
              </ListItem>
              <Divider />
            </React.Fragment>
        </>
    );
}

export default TransactionCard;