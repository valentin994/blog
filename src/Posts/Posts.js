import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Posts = () => {
    return (
        <div style={{width: '100%'}}>
            <Box display='flex' justifyContent='center'>
                <Box width={1 / 4}>
                    <Card>
                        <CardContent>
                            <Typography align="right" variant="subtitle2">Author</Typography>
                            <Typography align="left" variant="h4" gutterBottom>Title</Typography>
                            <Typography align="left" variant="body1">Post text</Typography>
                        </CardContent>
                        <CardActions>
                            <Box width={1} align="center">
                                <FavoriteBorderIcon label="Favourite"></FavoriteBorderIcon>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </div>
    );
};

export default Posts;
