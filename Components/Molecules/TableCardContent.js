import React from 'react'
import Label from '../Atoms/Label'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      flex:1,
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.2s',
      paddingLeft:'2px',
        backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsHj8XaITY82RxTC2P5rGQXVsr44laFqVWA&usqp=CAU)',
        backgroundSize:'cover',
        '&:hover':{
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
      }
    },
    row:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    }

}));

function TableCardContent(props) {

    const classes = useStyles();

    const {
        label1,
        label2,
        label3
       } = props;

    return (
        <div className={classes.card}>
            <h3> <Label text={label1}/> </h3>
            <div className={classes.row}>
                 Item : <Label text={label2}/>
                | Cost : <Label text={label3}/>
            </div>

        </div>
    )
}


export default TableCardContent;

