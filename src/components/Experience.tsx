"use client"
import { Container, Stepper, Step, StepIndicator, Typography, Stack } from "@mui/joy";

function Experience() {
    const HEIGHT = window.innerHeight
    return <Container component='section' sx={{ paddingBottom: 22 }} >
        <Stack alignItems={'center'} gap={12}>
            <Typography level='title-md' color='neutral'>My Journey so far</Typography>
            <Stepper sx={{width: '100%'}}>
                <Step indicator={<StepIndicator />} orientation='vertical'>
                    Internship at Enquero
                    <Typography level='body-xs'>Mar 2023 - July 2023</Typography>
                </Step>
                <Step indicator={<StepIndicator />} orientation='vertical'>
                    SDE Enquero
                    <Typography level='body-xs'>July 2023 - present</Typography>
                </Step>
            </Stepper>
        </Stack>
    </Container>;
}

export default Experience;