export default function ShowAccountForm(props) {

    // 플래너 해당 아이디 데이터 가져오기
    console.log("gg")
    console.log(props.uId)
    console.log('hh')

    const [id, setId] = useState(props.uId);
    const [scheduleItem, setScheduleItem] = useState('');

    return (
        <form onSubmit={onEditSchedule}>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>일정</td>
                        <td colSpan={3}><input type="text" placeholder='제목' size="50" name="title" value={title} onChange={onTitleHandler} /></td>
                    </tr>
                    <tr>
                        <td>시작</td>
                        <td>
                            <input name="startDate" type="datetime-local" style={{ width: 165 }} value={start} onChange={onStartHandler} />
                        </td>
                        <td> ~ 종료</td>
                        <td>
                            <input name="endDate" type="datetime-local" style={{ width: 165 }} value={end} onChange={onEndHandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>분류</td>
                        <td colSpan={3}>
                            <input type="radio" name="Types" value="Work" onChange={onCategoryHandler} id="1" checked={Number(category) == 1} />Work
                            <input type="radio" name="Types" value="Party" onChange={onCategoryHandler} id="2" checked={Number(category) == 2} />Party
                            <input type="radio" name="Types" value="Shopping" onChange={onCategoryHandler} id="3" checked={Number(category) == 3} />Shopping
                            <input type="radio" name="Types" value="Dining" onChange={onCategoryHandler} id="4" checked={Number(category) == 4} />Dining
                            <input type="radio" name="Types" value="Trip" onChange={onCategoryHandler} id="5" checked={Number(category) == 5} />Trip<br />
                        </td>
                    </tr>
                    <tr>
                        <td>설명</td>
                        <td colSpan={3}><textarea rows="10" cols="50" name="comment" value={description} onChange={onDescirptionHandler}></textarea></td>
                    </tr>
                </tbody>
            </table>
            <select onChange={handleSelect} value={Selected}>
                {selectList.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
            <input type="button" value="연관 가계부 내역 보기" onClick={onShowAccount} /><br />
            <input type="submit" value="수정" />
            <input type="button" value="삭제" onClick={onDelSchedule} />
        </form >
    )
}