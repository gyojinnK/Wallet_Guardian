import "./Card.css";

const Card = (props) => {
    const classes = "card " + props.className;
    // 래퍼 컴포넌트 사용 시 css를 적용하기 위한 className은 위처럼 설정해야함
    return <div className={classes}>{props.children}</div>;
    // props.children은 래퍼 컴포넌트를 생성하게 함

    // +) 재사용, 중복 코드 방지
};

export default Card;
