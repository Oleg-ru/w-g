import React, {createContext, useState} from 'react';

export const PlayerContext = createContext(null);

export function PlayerProvider({children}) {

    const [isPlaying, setIsPlaying] = useState(false);

    function togglePlay() {
        setIsPlaying(prev => !prev)
    }

    const player = {
        isPlaying,
        togglePlay,
    };

    return <PlayerContext.Provider value={player} >
        {children}
    </PlayerContext.Provider>
}