import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import interImg from '../images/inter.jpg';
import accountImg from '../images/account.jpg';
import plannerImg from '../images/planner.jpg';
function Cards() {
    return (
        <div className='cards'>
            <h1>MergePlan의 기능은 총 3가지입니다.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                            src={interImg}
                            text='mergeplan은 가계부와 플래너의 연동기능이 가능해요.'
                            label='2 in 1 서비스'
                            path='/'
                        />
                        <CardItem
                            src={plannerImg}
                            text='나만의 구분을 만들어 일정들을 손쉽게 관리할 수 있어요.'
                            label='다양한 일정을 한눈에'
                            path='/planner'
                        />
                        <CardItem
                            src={accountImg}
                            text='일별, 주간별, 월별 구분 뿐만아니라 사용자 지정기간, 지출 종류별로 다양하게 확인할 수 있어요.'
                            label='수입과 지출을 간편하게!'
                            path='/account'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;