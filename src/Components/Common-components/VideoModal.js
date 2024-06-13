
import React from 'react'


export const VideoModal = ({ handleClose, show ,yt_id }) => {
    const modelClass = show ? 'modal open' : 'modal';
    const thumbnail = `https://img.youtube.com/vi/${yt_id}/hqdefault.jpg`;
    const src = `https://www.youtube.com/embed/${yt_id}?autoplay=1&mute=1&rel=0`;
    const srcdoc_style = `<style>*{padding:0;margin:0;overflow:hidden}.wrapper__poster{display:block;align-items:start;position:relative}.wrapper__poster:before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjksODVWMTVsNTUsMzUtNTUsMzVaIi8+PC9zdmc+Cg==);position:absolute;max-width:64px;max-height:64px;transform:translate(-50%,-50%);border-radius:50%;background:#DF1995;padding:10px;width:9%;height:16%;top:80%;left:10%;z-index:1}.wrapper__poster img{width:100%;height:auto;object-fit:cover;aspect-ratio: 16 / 9;border-radius: 10px;}</style><a class=wrapper__poster href=${src}><img src=${thumbnail}></a>`;
    return (
      <div className={modelClass}  id="modal-one">
          <div className="modal-bg modal-exit"></div>
          <div className="modal-container yt-video__wrapper">
              <iframe id="yt-video" src="https://www.akhbaralaan.net/robots.txt"
                      srcDoc={srcdoc_style}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen title="">
              </iframe>
              {<button className="modal-close modal-exit" onClick={handleClose}>&times;</button>}
          </div>
      </div>
  );
};
export default VideoModal;