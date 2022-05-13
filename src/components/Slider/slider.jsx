import React from 'react'
import Carousel from 'react-elastic-carousel';

function Slider() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 }
    ];
    const imgList = [
        { url: "tongdai1.jpg" },
        { url: "tongdai2.jpg" },
        { url: "tongdai1.jpg" },
        { url: "tongdai2.jpg" },
        { url: "tongdai1.jpg" },
    ]
    return (
        <Carousel
            className='advertise'
            breakPoints={breakPoints}
            enableAutoPlay={true}
            autoPlaySpeed={1500}
            enableSwipe={true}
            easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={1500}
            itemsToScroll={1}
            // outerSpacing={20}
        // itemPadding={[0, 10]}
        >
            {
                imgList.map((item, index) => {
                    return (
                        <img src={`/img/slider/${item.url}`} alt="" style={{ width: "100%", maxHeight:"400px" }} />
                    )
                })
            }
        </Carousel>
    )
}

export default Slider