import { Player } from '@livepeer/react';

//using playbackurl or ipfs hash
export default function playAsset(){

    return(
        <div style={{width:"50%"}}>
            <h2>Welcome to the player</h2>
            
            <Player
                playbackId={"cdadmt54kgmxjrju"}
            />
        </div>
    )

}