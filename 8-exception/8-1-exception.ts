// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if(fileName === 'not exist!') {
        throw new Error(`file not exist ${fileName}`);
    }
    return 'file contents';
}

function closeFile(fileName: string): string {
    return
}
const fileName = 'not exist!';
function run() {
    try {
        // 정말 error가 발생하는 부분만 사용
        console.log(readFile(fileName));
    } catch (error) {
        console.log('catched!!');
        return;
    } finally {
        // 성공하든 실패하든 닫아줘야함
        closeFile(fileName);
        console.log('finally!!');
    }
}
