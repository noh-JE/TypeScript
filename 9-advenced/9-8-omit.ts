{
    /*
    *
    * pick과 반대로 원하는 것을 빼버릴 수 있다.
    * */

    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetadata = Omit<Video, 'url'| 'data' | 's'>;

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'http://',
            data: 'byte-data..',
        }
    };

    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id,
            title: 'video',
        }
    };

}
