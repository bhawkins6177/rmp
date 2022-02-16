import {Container,Avatar, Button, Grid, Paper, Typography, TextField } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';

function Auth(){
    
    // when the screen is smaller the padding for the form elements goes away on the left and right
    const isSignUp = true;

    function handleSubmit(){

    }

    function handleChange(){

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
                <Avatar >
                    <LockIcon />
                </Avatar>
                <Typography variant='h5'
                sx={{
                    paddingBottom: '20px'
                }}
                >{isSignUp ? 'Sign Up': 'Sign In'}</Typography>
                <form  onSubmit={handleSubmit} sx={{
    
                    
                    padding: '10px,10px,10px,10px'
                }}>
                    <Grid container spacing={2}
                    sx={{
                        padding: '10px, 10px, 10px, 10px,'
                    }}
                    >
                        {
                            isSignUp && (
                                <>
                                    <Grid item xs={6} md={12}>
                                        <TextField name='firstName' label='First Name' onChange={handleChange} autoFocus xs={6} variant='outlined'/>
                                    </Grid>
                                    <Grid item  xs={6} md={12}>
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
                    <Button type="submit" fullWidth variane="contained" color="primary">{isSignUp ? "Sign Up" : "Sign In"}</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;