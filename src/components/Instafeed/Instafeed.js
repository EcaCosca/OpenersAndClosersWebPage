import React, { useState, useEffect } from 'react'
import InstagramEmbed from 'react-instagram-embed';


const url = `https://ig.instant-tokens.com/users/c1d4873b-f1ad-4f71-937d-eb89e68a03a7/instagram/17841400666951258/token.js?userSecret=f24ejws1zukw91o0o9kd2f`;

const Instafeed = () => {
    const [gramz, setGramz] = useState([]);
    const userInstagram = require("user-instagram");

    // Gets informations about a user
    userInstagram('edouard_courty') // Same as getUserData()
        .then(console.log)
        .catch(console.error);

    // useEffect (() => {
    //     console.log('fetching the gramz');
    //     fetch(url)
    //         .then(data => data.json())
    //         .then(({ data })) => {
    //             console.log('back!');

    //             const thumbs = data.user.edge_owner_timeline_media.edge.map(
    //                 edge => ({
    //                     url: edge.node.
    //                 })
    //             )
    //         }

    // });

    return (
        <>
        <div class="powr-social-feed" id="5f681ddf_1626432326">

        </div>
        <script src="https://www.powr.io/powr.js?platform=html"></script>

      




	{/* <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>
	<script type="text/javascript">
	var userFeed = new Instafeed({
		get: 'user',
		target: "instafeed-container",
    	resolution: 'low_resolution',
		accessToken: 'IGQVJYXzNpaXFLNlZAlbFJQTG5YMWRyd0hhckVKQ0tyWnRrYnA2dDNWVDZAFSDdTZAlNQQlhNRlRtZAnhNbThGaThfMVJ6dnp0SmcyLXVHMmdmM2tBTUNQOU5OakVXcjg3Y2tHOUdsWXVCalpBNXJuNU1pagZDZD'
	});
	userFeed.run();
	</script>
        */}
       
       
       
       
       
        {/* <script type="text/javascript" src="path/to/instafeed.min.js"></script> */}
       
       
       
       
        {/* <script type="text/javascript">
                fetch('https://ig.instant-tokens.com/users/c1d4873b-f1ad-4f71-937d-eb89e68a03a7/instagram/17841400666951258/token.js?userSecret=f24ejws1zukw91o0o9kd2f')
            .then(resp => resp.json())
            .then(data => {
                     feed = new Instafeed({
                        accessToken: data.Token,
                        limit: 12,
                        template: '<a href="{{link}}"><img class="image__img  pulse1" title="{{caption}}" src="{{image}}" /><div class="image__overlay"><div class="image__title">{{caption}}</div></div></a>',
                    });
                    feed.run();
                });
        </script> */}




            {/* <div id="instafeed"></div> */}

            {/* <script type="text/javascript"> */}
                {/* var feed = new Instafeed({ */}
                {/* accessToken: 'IGQVJYXzNpaXFLNlZAlbFJQTG5YMWRyd0hhckVKQ0tyWnRrYnA2dDNWVDZAFSDdTZAlNQQlhNRlRtZAnhNbThGaThfMVJ6dnp0SmcyLXVHMmdmM2tBTUNQOU5OakVXcjg3Y2tHOUdsWXVCalpBNXJuNU1pagZDZD', */}
                {/* }); */}
                {/* feed.run(); */}
            {/* </script> */}
        </>
    )
}

export default Instafeed
