import { Grid, Card, Box, Stack, useTheme, Typography } from "@mui/joy";
import { PropsWithChildren } from "react";

interface SkillCard {
    title?: string
}
export function SkillCard(props: PropsWithChildren<SkillCard>) {
    const { children, title } = props
    const theme = useTheme()
    return <Grid>
        <Card sx={{ backgroundColor: theme.palette.common.white }}>
            <Box width={64} height={64}>
                <Stack alignItems='center' justifyContent='center' height='100%' gap={1}>
                    {children}
                    <Typography level='body-xs' fontFamily='monospace'>{title}</Typography>
                </Stack>
            </Box>
        </Card>
    </Grid>;
}