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
                            src='data:image/jpeg;base64,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'
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