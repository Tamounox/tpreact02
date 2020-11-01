import React from 'react'
import { Button, Text, Box } from 'grommet';

export const Name = () => {
    const [count, setCount] = React.useState(0)
    return (
        <Box>
            <Text>{count}</Text>
            <Button label="+1" onClick={() => setCount(count+1)}></Button>
        </Box>
    )
}
export default Name