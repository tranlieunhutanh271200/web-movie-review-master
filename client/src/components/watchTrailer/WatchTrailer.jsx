import React from 'react'

export const WatchTrailer = ({showWatchModal, setShowModalTrailer}) => {
    const trailer="https://imdb-video.media-imdb.com/vi1533394969/1434659607842-pgv4ql-1627914013495.mp4?Expires=1633413385&Signature=SDGTDhsrOWZgPQD1sQYGi5at2f5xvH0e8ONhHdg-8WFaKfMhUcJUWwsqbsrgor02kmZBtlMxaLF-5YOHdBFyz8xNYP14KjUxzaEjaRuTrFlFOcw2q5NmdeF2Z-2vYjsDZM-LuBximo3b1PksKK9yFmS6LG7EQZ~Y4M1nEcsLeATyDE3bWRVAjOvgSHoe-8Y6j7hgzVi9tXGC9bnzjtbFMNcDSIjjMARBIrwdmb27akev5dADbm5MFRAJGNOULi2D3chdbPpjs-qeyMLAK33iDFdXJDLEPlmi30t9aEL82qd0Aghpoke0ELcj9IOZltAdnavo0ruU5-kvQ67neJ35qA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";
    return (
        <>
        {showWatchModal ?
        <div className="watchTrailer">
            <video src={trailer} autoPlay={true} muted={false}></video>
        </div> : null}
        </>
    );
}
