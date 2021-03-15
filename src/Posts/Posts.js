import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from "axios";

const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/posts").then(res => {
            setPosts(res.data.filter(post => props.filterState[post["label"].toLowerCase()]));
            console.log(props.filterState);
        }).catch(err => {
            console.log(err);
        })
    }, [props.filterState])

    return (
        <div style={{width: '100%'}}>
            <Box display='flex' justifyContent='center' mt={2}>
                <Box width={3 / 4}>
                    {posts.map((item, index) => (
                        <div key={index} style={{margin:"20px"}}>
                        <Card>
                            <CardContent>
                                <Typography align="right" variant="subtitle2">{item.author}</Typography>
                                <Typography align="left" variant="h4" gutterBottom>{item.title}</Typography>
                                <Typography align="left" variant="body1">{item.text}</Typography>
                            </CardContent>
                            <CardActions>
                                <Box width={1} align="center">
                                    <FavoriteBorderIcon label="Favourite"></FavoriteBorderIcon>
                                </Box>
                            </CardActions>
                        </Card>
                        </div>
                        )
                    )}
                </Box>
            </Box>
        </div>
    );
};

export default Posts;
