{
    /*
    * Enum
    * 여러가지에 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입
    * */
    // JavaScript 지원x
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({'MONDAY': 0, 'TUESDAY': 1, 'WEDNESDAY': 2, });
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    type DaysType = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY'
    enum Days {
        Monday = 1, // 숫자로 지정하면 자동으로 순차적으로 숫자 배정이됨
        Tuesday, // string 으로 할 경우 값 할당해줘야함
        Wednesday,
        Thursday,
        Friday,
        Satarday,
        Sunday
    }
    console.log(Days.Friday);
    let day: Days = Days.Monday;
    // 다시 변수에 엉뚱한 값을 할당해도 문제없다고 판단
    day = Days.Tuesday;
    day = 10;
    console.log(day);

    // enum 사용보다는 union을 권장
    // 변수에 다른 값을 지정하면 error -> 더 안전
    let dayOfwek: DaysType = 'MONDAY';
    dayOfwek = 20;

    // 정말정말 enum이 사용되는 경우는
    // 다른 모바일 클라이언트 안드로이드, ios, 코틀린 등에 사용할 때
}