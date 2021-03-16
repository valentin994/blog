import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const Navigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div style={{ width: '100%' }}>
        <Box display='flex' justifyContent="center">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Add" icon={<AddIcon />} />
            </BottomNavigation>
        </Box>
        </div>
    );
};

export default Navigation;
