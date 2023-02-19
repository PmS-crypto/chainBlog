
import { createClient } from 'urql';
import { useEffect,useState } from 'react';

//const APIURL = "https://api.studio.thegraph.com/query/42382/testmysg/v0.0.1"
const APIURL = "https://api.studio.thegraph.com/query/42411/blogging-dapp/v0.0.5"

const query = `
query {
  postAddeds(first: 5) {
    id
    postId
    author
    imageUrl
    imageName
    assetId
    playbackId
    title
    text
    blockTimestamp
  }
}
`
const client = createClient({
  url : APIURL
})

function App() {
  //const [addedVoters,setaddedVoters] = useState([])
  const [postAddeds,setpostAddeds] = useState([])
  useEffect(()=>{
    fetchData()
  },[])
  async function fetchData(){
    const response = await client.query(query).toPromise()
    console.log('response : ',response)
    //setaddedVoters(response.data.addedVoters)
    setpostAddeds(response.data.postAddeds)
  }
  return (
    <div className="App">
      <h1>
        trials
      </h1>
      {/* {
        addedVoters.map((voter, index)=>(
          <div key={index}>
              <a href={voter._voterAddress} target="_blank">Voter Address</a>
              <a href={voter.blockNumber} target="_blank">Block Number</a>
          </div>
        ))
      } */}
    </div>
  );
}

export default App;
