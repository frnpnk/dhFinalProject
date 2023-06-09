import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import PageHomeLayout from 'integrador/components/layouts/layout-home.component';
import { StepProvider } from 'integrador/components/contexts/StepContext';
import { Deposit } from 'integrador/components/deposit/deposit-page.component.page';
import { Box, Stack } from '@mui/system';
import { Typography, useMediaQuery } from '@mui/material';
import { theme } from 'integrador/styles/material-theme';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export const ChargeMoneyCard: NextPage = () => {

    const laptopOrDesktop = useMediaQuery(theme.breakpoints.up("laptop"));
    const desktop = useMediaQuery(theme.breakpoints.up("desktop"));
    const mobile = useMediaQuery(theme.breakpoints.down("tablet"));

    let laptop;
    if (laptopOrDesktop && !desktop)
        laptop = true;

    const cardSteps = ['Selecciona la tarjeta', 'Selecciona el monto', 'Verificá los datos'];
    const cardStepsMobile = ['Tarjeta', 'Monto', 'Verificá'];


    return (
        <>
            <Head>
                <title>Cargar dinero</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StepProvider>
                <Stack sx={{ width: '100%', alignItems: 'center',  justifyContent: 'start', alignContent:' center', flexWrap: 'wrap' }} 
                    mt={laptopOrDesktop ? '1rem': mobile ? '0' :'3rem'} 
                    spacing={laptop ? 1.3 : 2.5 }
                >

                    { mobile && 
                        <Box sx={{display: 'flex', alignItems: 'center', width: '90%', marginTop: '15px'}}>
                            <ChevronRightIcon fontSize='small'sx={{color: 'grey'}}/>
                            <Typography variant='body1'>Cargar dinero</Typography>
                        </Box>
                    }

                    <Deposit page="card" steps={mobile ? cardStepsMobile : cardSteps}/>
                </Stack>
                
            </StepProvider>
        </>
        
    )
}

(ChargeMoneyCard as any).Layout = PageHomeLayout;

export default ChargeMoneyCard;
