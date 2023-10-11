import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react"
import Pop from "../common/Pop"
import axios from 'axios';

function Slowfood() {
    const [Vids, setVids] = useState([]);
    const [Open, setOpen] = useState(false);
    const [Index, setIndex] = useState(0);
    useEffect(() => {
        let key = "AIzaSyBxnZ1kg_BJjZCcQrxHM4iiBdGWtEnUNgE";
        let playlistId = "PL5nG0UNbAKKad1FmrIyC9Q91Osxo-V1hY";
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}`;
        axios.get(url).then((json) => {
            setVids(json.data.items);
        })
    }, [])

    useEffect(() => {
        console.log(Vids);
    })

    return (
        <>
            {Vids.map((el, index) => (
                <article className="youtubeArticle" key={index}>
                    <div className="youtubePic">
                        <img src={el.snippet.thumbnails.medium.url} alt={el.snippet.title} />
                        <FontAwesomeIcon icon={faYoutube} onClick={() => { setOpen(true); setIndex(index); }} />
                    </div>
                    <div className="youtubeTxt">
                        <h2>{el.snippet.title.substr(0, 25) + "..."}</h2>
                        <p>{el.snippet.description.substr(0, 50) + "..."}</p>
                    </div>
                </article>
            ))}

            {Open && <Pop setOpen={setOpen}>
                <iframe src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
                    frameBorder="0">
                </iframe>
            </Pop>}
        </>
    )
}

export default Slowfood