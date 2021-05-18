{
    /*
    * Pick<T>
    * 기존의 타입에서 id, title 정보만 이용하는 타입을 만들 것이다.
    *
    *
    * */

    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetadata = Pick<Video, 'id'| 'title'>;

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
