import { isClient } from "@/utils/clientUtils";
import { Grid, Card, Box, Stack, useTheme, Typography } from "@mui/joy";
import { motion, MotionStyle, MotionValue, useTransform } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface SkillCard {
    title?: string
    progress: MotionValue;
    index: number,
    length: number
}
export function SkillCard(props: PropsWithChildren<SkillCard>) {
    const { children, title, progress, index, length } = props
    const theme = useTheme()
    const cardRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (cardRef.current) {
           setHeight(window.innerHeight - (cardRef.current.getBoundingClientRect().top - window.innerHeight) - 12 * 8)
           console.log(window.innerHeight - (cardRef.current.getBoundingClientRect().top - window.innerHeight) - 12 * 8)
        }
    }, [cardRef])

    const y = useTransform(progress, [0, 0.8 - 0.05 * (length - index)], [height, 0])

    return <Grid ref={cardRef}>
        <Card component={motion.div} style={{y}} sx={{ backgroundColor: theme.palette.common.white }}>
            <Box width={64} height={64}>
                <Stack alignItems='center' justifyContent='center' height='100%' gap={1}>
                    {children}
                    <Typography level='body-xs' fontFamily='monospace'>{title}</Typography>
                </Stack>
            </Box>
        </Card>
    </Grid>;
}