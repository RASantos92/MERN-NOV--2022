import { useSpring, animated } from 'react-spring'

export const FirstSpringComponent = (props) => {
    const springTool = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 700,
    })
    return <animated.div style={springTool}>I will fade in</animated.div>
}