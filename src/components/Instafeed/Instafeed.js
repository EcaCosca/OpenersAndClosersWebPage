import React from 'react'

const Instafeed = () => {
    return (
        <>
        <script type="text/javascript" src="path/to/instafeed.min.js"></script>

            <div id="instafeed"></div>

            <script type="text/javascript">
                var feed = new Instafeed({
                {/* accessToken: 'IGQVJYXzNpaXFLNlZAlbFJQTG5YMWRyd0hhckVKQ0tyWnRrYnA2dDNWVDZAFSDdTZAlNQQlhNRlRtZAnhNbThGaThfMVJ6dnp0SmcyLXVHMmdmM2tBTUNQOU5OakVXcjg3Y2tHOUdsWXVCalpBNXJuNU1pagZDZD', */}
                });
                feed.run();
            </script>
        </>
    )
}

export default Instafeed
