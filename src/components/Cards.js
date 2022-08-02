import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>mergeplan의 기능은 총 3가지입니다.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {/* <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Expore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Luxury'
                            path='/services'
                        />
                    </ul> */}
                    <ul className='cards__items'>
                        <CardItem
                            src='https://ph-test-11.slatic.net/p/837c71015c38881d582594567b94de47.png'
                            text='mergeplan은 가계부와 플래너의 연동기능이 가능해요.'
                            label='2 in 1 서비스'
                            path='/services'
                        />
                        <CardItem
                            src='https://royaldesign.kr/image/9/design-letters-weekly-planner-0?w=1366&quality=80'
                            text='나만의 구분을 만들어 일정들을 손쉽게 관리할 수 있어요.'
                            label='다양한 일정을 한눈에'
                            path='/products'
                        />
                        <CardItem
                            src='https://cdn.crowdpic.net/detail-thumb/thumb_d_017D48939F55DEA9076D522C60A527E4.jpg'
                            text='일별, 주간별, 월별 구분 뿐만아니라 사용자 지정기간, 지출 종류별로 다양하게 확인할 수 있어요.'
                            label='수입과 지출을 간편하게!'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;