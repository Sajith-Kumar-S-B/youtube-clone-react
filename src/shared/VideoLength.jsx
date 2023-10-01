import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
    const videoLengthInSeconds = moment()
        ?.startOf("day")
        ?.seconds(time)
        ?.format("H:mm:ss");
    return (
        <span className="absolute bottom-2 right-2 bg-black py-[2px] px-[4px] text-white text-xs rounded">
            {videoLengthInSeconds}
        </span>
    );
};

export default VideoLength;