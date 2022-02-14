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
                    <Card>
                        <CardHeader
                            title={'Basic'}
                            
                            sx={{
                                backgroundColor: '#00FFFF',
                                color: '#3F00FF',
                            }}
                        />
                        <CardContent>
                            <Box>
                                <Typography variant='h4'
                                sx={{
                                    fontWeight: 'Bold'
                                }}
                                >
                                    $45
                                </Typography>
                                <Typography>
                                    Our base product.
                                    <br/>
                                    includes airation for an average sized yard.
                                    <br/>
                                    
                                </Typography>
                                <Button fullWidth >Buy Now!</Button>
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card>
                        <CardHeader
                        action={<StarIcon />}
                            title={'Pro'}
                            
                            sx={{
                                backgroundColor: '#00FFFF',
                                color: '#3F00FF',
                            }}
                        
                            
                        />
                        
                        <CardContent>
                            <Box>
                                <Typography variant='h4'
                                sx={{
                                    fontWeight: 'Bold'
                                }}
                                >
                                    $55
                                </Typography>
                                <Typography>
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
                                <Button fullWidth >Buy Now!</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
        </Container>
        
        
    )
}
export default Services;
