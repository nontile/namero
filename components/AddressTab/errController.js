// 'E0001': '승인되지 않은 KEY 입니다.
// 'E0005': 'No search word has been entered.
// 'E0006': 'Please enter your address in detail.
// 'E0008': 'Address entered too short.
// 'E0009': 'It is not possible to search by address only number.
// 'E0010': 'Address entered too long.
// 'E0011': 'Long numbers are included.
// 'E0012': 'Can not search special characters + numbers.
// 'E0013': 'Can not search SQL & special characters(%,=,>,<,[,]).
// 'E0014': 'The authorization key preiod has expired.
// 'E0015': 'The search range has been exceeded.

const addressErrorCodes = {
    'E0001': '주소 찾을 권한을 앱이 잃어버렸습니다.\n앱관리자에게 알려주세요',
    'E0005': '아무것도 입력 되지 않았습니다.',
    'E0006': '좀 더 자세하게 알려 주세요',
    'E0008': '주소가 너무 짧습니다.',
    'E0009': '좀 더 정확히 작성해 주세요',
    'E0010': '너무 긴 주소 입니다.',
    'E0011': '너무 큰 숫자가 있습니다.',
    'E0012': '잘못된 특수문자를 사용하였습니다.',
    'E0013': '잘못된 특수문자를 사용하였습니다.',
    'E0014': '잠시후 다시 해보세요.',
    'E0015': '너무 많이 입력 했습니다.'
}

const errController = (code) => {
    if(code === '0')
        return {err: false, msg: null};
    return {err: true, msg: addressErrorCodes[code]};
}

export default errController;