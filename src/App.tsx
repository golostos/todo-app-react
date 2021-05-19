import TasksList from './components/TasksList';
import NewTask from './components/NewTask';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectToken, selectIsLogin, selectUserError } from './features/users/usersSlice';
import Login from './components/Login';

const useStyles = makeStyles({
  root: {
    margin: "1rem auto",
    minWidth: 300,
    maxWidth: 800
  }
})

function App() {
  const isLogin = useSelector(selectIsLogin)
  const classes = useStyles()

  if (isLogin) {
    return (
      <div className={classes.root}>
        <NewTask />
        <TasksList />
      </div>
    )    
  } else return <Login /> ;
}

export default App;