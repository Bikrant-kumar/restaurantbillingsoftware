import React,{useEffect,useState} from 'react'
import Card from '../Organisms/Card'
import Header from '../Molecules/Header'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FilterBar from '../Atoms/FilterBar';
import axios from 'axios';
import TableCard from '../Organisms/TableCard';

const useStyles = makeStyles((theme) => ({
     container :{
          flexGrow:1,
          float:'center'
     },
     table:{
        background:'blue',
        textAlign:'center'
     },
     menu1:{
        background:'red',
        textAlign:'center'
     }
}));

function Menu( ) {
    const [menuList, setMenuList] = useState([]);
    const [menuName,setMenuName] = useState([]);
    const [tableName,setTableName]=useState([]);
    const [defaultProps,setDefaultProps]=useState([]);

    useEffect(() => {
            axios
            .get(`http://localhost:3000/posts`)
            .then(res=>{
                setMenuList(res.data);
            })
            .catch(err=>console.log(err));

            axios
            .get(`http://localhost:3000/comments`)
            .then(res=>{
                setDefaultProps(res.data);
            })
            .catch(err =>console.log(err));
    }, []);
    
    const getMenuName = (value)=>{
        setMenuName(value.menuName);
    }
    const getTableName =(value)=>{
        setTableName(value.tableName)
    }

    useEffect(() => {
        if(menuName){
            let details = menuList.filter((ele)=>{
                    if(ele.Name.toLowerCase().includes(menuName.Name.toLowerCase())){
                        return ele;
                }
            })
            setMenuList(details);
        }
    },[menuName]);

    useEffect(()=>{
        if(tableName){
            console.log(defaultProps)
            let details = defaultProps.filter((ele)=>{
                if(ele.Name.toLowerCase().includes(tableName.Name.toLowerCase())){
                    return ele;
                }
                console.log(typeof ele.Name)
            })
            console.log(typeof tableName.Name)
            setDefaultProps(details);
        }
        else{
            setDefaultProps()
        }
    },[tableName]);
    
    const classes = useStyles();

    return (
        <div className={classes.container}>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper> <Header/> </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper className={classes.table}> TABLE </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.menu1}> MENU </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper className={classes.tableSearchBar}> 
                    <FilterBar getMenu={setTableName} name="Table" Details={defaultProps}/> </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.menuSearchBar}> 
                        <FilterBar getMenu={setMenuName} name="Menu" Details={menuList}/> </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                     <Paper className={classes.main1}> <TableCard defaultProps={defaultProps} /> </Paper> 
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.main2}>
                          {
                             (menuList!=null)?
                                menuList.map((menuList,index) => (  
                                    <div key={index}>           
                                        <Card 
                                            menuList={menuList}
                                        />
                                    </div>
                                )):<div> No Menu</div>
                            }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Menu