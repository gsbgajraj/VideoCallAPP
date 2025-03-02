import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoPage = () => {

    const {id}= useParams();
    const roomID = id
  let myMeeting = async (element) => {

 // generate Kit Token 
 // -gs changes
 const appID = Number(import.meta.env.VITE_APP_ID);
 const serverSecret = import.meta.env.VITE_SERVER_SECRET;
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"navdeep");
 // -gs changes
 
 
 // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 // start the call
 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
   });
  };

  return (
    <div ref={myMeeting}> HomePage</div>
  )
}

export default VideoPage