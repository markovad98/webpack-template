import React, { useState } from 'react';

const App = () => {
    const [clicks, setClicks] = useState(0);

    const styles = {
        button: {
            color: 'red'
        }
    };

    return (
        <>
            <button
                style={styles.button}
                onClick={() => setClicks(clicks + 1)}
            >
                {`Clicked: ${clicks}`}
            </button>
        </>
    )
};

export default App;