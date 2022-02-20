import {Card, CardHeader, Container,Grid, CardContent, Box, Typography,Button} from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder'
// so evertime I use the Container or Card component I get an error: Uncaught Error: Invalid hook call.
// OK so I was importing from "@mui/core" instead of "@mui/material"
function Services(){
    return(
        <Container>
            <Grid container spacing={5}
            justifyContent="center"
            alignItems="center">
                <Grid item xs={6} md={4}> 
                    <Card sx={{

                        backgroundColor:"rgba(0,0,0,.15)"
                        
                    }}>
                        <CardHeader
                            title={'Basic'}
                            
                            sx={{
                                background: 'transparent',
                                color: 'white',
                            }}
                        />
                        <CardContent>
                            <Box>
                                <Typography variant='h4'
                                sx={{
                                    fontWeight: 'Bold',
                                    color: '#D6D5CB',
                                }}
                                >
                                    $45
                                </Typography>
                                <Typography sx={{
                                    color: '#D6D5CB',
                                }}>
                                    Our base product.
                                    <br/>
                                    includes airation for an average sized yard.
                                    <br/>
                                    
                                </Typography>
                                <Button color="inherit" >Buy Now!</Button>
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card sx ={{
                        backgroundColor:"rgba(0,0,0,.15)",
                    }}>
                        <CardHeader
                        action={<StarIcon />}
                            title={'Pro'}
                            
                            sx={{
                                
                                color: 'white',
                            }}
                        
                            
                        />
                        
                        <CardContent>
                            <Box>
                                <Typography variant='h4'
                                sx={{
                                    fontWeight: 'Bold',
                                    color: '#D6D5CB'
                                }}
                                >
                                    $55
                                </Typography>
                                <Typography sx={{
                                    color: '#D6D5CB'
                                }}>
                                    Our full package!
                                    <br/>
                                    Includes, Airation, Seeding, and Fertilizer
                                    <br/> 
                                    For and Average sized yard 
                                    <br/>
                                </Typography>
                                <Typography
                                sx={{
                                    fontWeight: 'Lighter',
                                    color: '#A9A9A9'
                                }}>
                                    *Best value!*
                                    <br/>
                                </Typography>
                                <Button  color="inherit" >Buy Now!</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>    
            </Grid>
        </Container>
        
        
    )
}
export default Services;
