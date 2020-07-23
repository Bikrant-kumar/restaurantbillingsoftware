import React,{useState} from 'react'
import TableCardContent from '../Molecules/TableCardContent';
import { makeStyles } from '@material-ui/core/styles';
import DialogBox from '../Molecules/DialogBox';
import Label from '../Atoms/Label'

const useStyles = makeStyles((theme) => ({
    root: {
        position:'absolute',
        top: theme.spacing(30),
        left: theme.spacing(60)
    },
    closeButton: {
      right: theme.spacing(1),
      bottom: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    title:{
        background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStLoOrKtjptIWWoy1OC8h7pzbk1zKmiAFN0Q&usqp=CAU)'
    },
    menu:{
       position:'relative' ,
       columnWidth:'auto'
    }
  }));

function TableCard(props) {
    const classes = useStyles();
    const myList = props.defaultProps;
    const [opendialog, setOpendialog] = useState(false);
    var tableName;
    const handleClickOpen = (index) => {
      setOpendialog(true);
        tableName=index;
        console.log(typeof myList[tableName].Name);
        console.log(props.defaultProps[1])
        // console.log(Object.keys(myList[tableName][0] ));
    };
    const handleClose = () => {
      setOpendialog(false);
    };

    return (
        <div className={classes.card}>
           {    
                myList.map((field,index) => (   
                     <div key={index} index={index} onClick={()=>handleClickOpen (index) }>
                        <TableCardContent 
                            label1={field.Name}
                            label2={field.item}
                            label3={field.cost}/>                       
                     </div>
                ))
            }
            <div className={classes.root}>
            <dialog onClose={handleClose} open={opendialog} >
                    <h3 className={classes.title}> 
                        MY TABLE
                     {/* {Object.keys(myList[tableName] )[0]}  */}
                    </h3>
                    <table className={classes.menu}>
                        <tr>
                            <th>Serial_No.</th>
                            <th>Items</th> 
                            <th>Serving</th>  
                            <th>Cost</th>
                            <th></th>
                        </tr>
                        <tr>
                        <td>01</td>
                        <td>Misal Pav</td>
                        <td>2</td>
                        <td>400</td>
                        </tr>
                    </table>
                    <button className={classes.closeButton} onClick={handleClose} >
                        Close
                    </button>
                </dialog>
            </div>
        </div>
    )
}


export default TableCard

