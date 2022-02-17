import {Container,Avatar, Button, Grid, Paper, Typography, TextField } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import {GoogleLogin} from 'react-google-login'
import GoogleIcon from '@mui/icons-material/Google';

function Auth(){
    
    // when the screen is smaller the padding for the form elements goes away on the left and right
    
    const [isSignUp, isSignUpState] = useState(false)
    function handleSubmit(){

    }

    function handleChange(){

    }

    function switchMode(){
        isSignUpState(!isSignUp)
        // setIsSignUp((prevIsSignUp)=> !prevIsSignUp);
    }

    async function googleSuccess(res){
        console.log(res)
    }
    
    function googleFailure(err){
        console.log(err)
        console.log('Google Sign in failed')

    }

    return(
        <Container component='main' maxWidth="xs">
            <Paper  elevation={3}xs={{
                marginTop: '64px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '35px'
            }}>
                <Avatar>
                    <LockIcon />
                </Avatar>
                <Typography variant='h5'
                sx={{
                    paddingBottom: '20px'
                }}
                >{isSignUp ? 'Sign Up': 'Sign In'}</Typography>
                <form  onSubmit={handleSubmit}>
                    <Grid container spacing={2}
                    sx={{
                        padding: '30px'
                    }}
                    >
                        {
                            isSignUp && (
                                <>
                                    <Grid item xs={6} md={6}>
                                        <TextField name='firstName' label='First Name' onChange={handleChange} autoFocus xs={6} variant='outlined'/>
                                    </Grid>
                                    <Grid item  xs={6} md={6}>
                                        <TextField name='lastName' label='Last Name' onChange={handleChange} autoFocus xs={6} variant='outlined'/>
                                    </Grid>
                                    <Grid  item xs={6} md={12}>
                                        <TextField type="tel" name='phone' label='Phone number' onChange={handleChange} autoFocus xs={6} variant='outlined'/>
                                    </Grid>
                                    <Grid item xs={6} md={12}>
                                        <TextField type="text" name='adress' label='Address' onChange={handleChange} autoFocus xs={6} variant='outlined'/>
                                    </Grid>
                                    
                                </>
                            )}
                            <Grid item xs={6} md={12}>
                                <TextField type="email" name='email' label='Email' onChange={handleChange} autoFocus xs={6} variant='outlined'/>
                            </Grid>
                            <Grid item xs={6} md={12}>
                                <TextField type='password' name='password'label='Password' onChange={handleChange} autoFocus xs={6} variant='outlined'/>
                            </Grid>
                            {isSignUp && 
                            <Grid item  xs={6} md={12}>
                                <TextField type='password' name="confirmPassword"label='Confirm Password' onChange={handleChange} autoFocus xs={6} variant='outlined'/>
                            </Grid>
                            }
                    </Grid>
                    <GoogleLogin
                        
                        clientId="1092979897805-5pu691dqtr2teq8a20bhmjgtidv0v0kd.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button 
                                color="primary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                variant='contained'
                                startIcon={<GoogleIcon />}
                                >
                                    Google Sign In
                                </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Button 
                    sx={{
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}
                    variant='contained' 
                    type="submit" 
                    fullWidth 
                    color="primary"

                    
                    >{isSignUp ? "Sign Up" : "Sign In"}</Button>
                    <Grid container justifyContent={'flex-end'}>
                            <Grid item>
                                <Button onClick={switchMode}>
                                    { isSignUp ? 'Already have an account? Sign in!': "Don't have an account? Sign up!"}
                                </Button>
                            </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;