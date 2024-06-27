let a = [1, 2, 3]; // 변수


// 1. 추가하기
let a1 = [...a, 4]; // 추가할 때는 무조건 이렇게 쓰기
console.log("이전", a);
console.log("이후", a1);


// 2. 추가하기 (특이한 것 - update)
let user = { name: "홍길동", age: 20 };
let user1 = { ...user, age: 21 };
console.log(user1);

// 3. 삭제하기 (삭제는 필터로 한다)
// (이렇게 하면 정확히는 필터로 5를 제외하고 4, 6만 찾아와서 복사한것)
const b = [4, 5, 6]; // 상수 (실행 직전에 전부다 메모리에 뛰움)
let b1 = b.filter((item) => item !== 5);
console.log(b1);

// 4. 검색하기
let userList = [
    { id: 1, name: "홍길동", age: 20 },
    { id: 2, name: "홍길순", age: 21 },
    { id: 3, name: "홍길동", age: 22 },
];

let search = userList.filter((item) => item.age > 21);
console.log(search);

// 5. 가공하기
let postList = [
    { id: 1, title: "제목1", content: "내용1" },
    { id: 2, title: "제목2", content: "내용2" },
    { id: 3, title: "제목3", content: "내용3" },
];

let post = postList.map((item) => ({
    ...item,
    content: "내용변경",
}));

console.log(post);