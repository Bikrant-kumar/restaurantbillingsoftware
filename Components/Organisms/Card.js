import React from 'react';
import CardContent from '../Molecules/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        card: {
          flex:1,
          boxShadow: '0 4px 8px 0 rgba(1,0,0,0.2)',
          transition: '0.3s',
          width: '100',
          paddingLeft:'4px',
          backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsHj8XaITY82RxTC2P5rGQXVsr44laFqVWA&usqp=CAU)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          '&:hover':{
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
          }
        }
}));

function Card(props) {
  const myLists = props.menuList;
  
 const classes = useStyles();
    return (
         <div className={classes.card}>         
             <CardContent 
                label1={props.menuList.Name} 
                label2={props.menuList.Cost}
             />
        </div>
    )
}

export default Card