const checkSearchedWord = (obj) => {
  
    if(!obj)
        return { err: true, msg: "주소를 입력해 주세요" };

    if (obj.length > 0) {
        //특수문자 제거
        var expText = /[%=><]/;
        if (expText.test(obj)) {
            return { err: true, msg: "특수문자를 지우고 검색해 보세요" };
        }

        //특정문자열(sql예약어의 앞뒤공백포함) 제거
        var sqlArray = new Array(
        //sql 예약어
        "OR",
        "SELECT",
        "INSERT",
        "DELETE",
        "UPDATE",
        "CREATE",
        "DROP",
        "EXEC",
        "UNION",
        "FETCH",
        "DECLARE",
        "TRUNCATE"
        );

        var regex;
        for (var i = 0; i < sqlArray.length; i++) {
        regex = new RegExp(sqlArray[i], "gi");

        if (regex.test(obj)) {
            return {
            err: true,
            msg: `${sqlArray[i]} 와(과) 같은 특정문자로 검색할 수 없습니다.`,
            };
        }
        }
    }
    return { err: false };
};

export default checkSearchedWord;
