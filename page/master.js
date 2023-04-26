let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let passimg = document.querySelector("#passimg")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울') {
        $(pass1).append('서울 전 지역')
        pass2.textContent = '서울 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/001.png?alt=media&token=5cc4b0db-50ac-464f-b2ba-f041cb7a5c83'
    }
    if(text === '부산') {
        $(pass1).append('부산 전 지역')
        pass2.textContent = '부산 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/002.png?alt=media&token=726396d2-4eed-4a8b-94de-a9625bcaea9a'
    }
    if(text === '대구') {
        $(pass1).append('대구 전 지역')
        pass2.textContent = '대구 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/003.png?alt=media&token=9bc5dba1-8a15-43bf-999f-925ccb43ba14'
    }
    if(text === '인천') {
        $(pass1).append('인천 전 지역')
        pass2.textContent = '인천 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/004.png?alt=media&token=52673a1f-df6f-48bf-8986-6a8e6e702e26'
    }
    if(text === '광주') {
        $(pass1).append('광주 전 지역')
        pass2.textContent = '광주 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/005.png?alt=media&token=f969ecb3-0364-4252-8bac-1009502fe130'
    }
    if(text === '대전') {
        $(pass1).append('대전 전 지역')
        pass2.textContent = '대전 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/006.png?alt=media&token=cac0c5f9-d3bc-4a97-a1f4-7aa8fcab7d9d'
    }
    if(text === '울산') {
        $(pass1).append('울산 전 지역')
        pass2.textContent = '울산 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/007.png?alt=media&token=2891b728-a291-47bd-a5b3-9a24add7c3f8'
    }
    if(text === '경기') {
        $(pass1).append('경기 전 지역')
        pass2.textContent = '경기 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/008.png?alt=media&token=4fdbf576-1144-48ba-b771-9e14db30c5d6'
    }
    if(text === '강원') {
        $(pass1).append('강원 전 지역')
        pass2.textContent = '강원 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/009.png?alt=media&token=1311b54f-53c4-4c27-adca-1d881761af9e'
    }
    if(text === '충북') {
        $(pass1).append('충북 전 지역')
        pass2.textContent = '충북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/010.png?alt=media&token=585e54db-ac2b-41f4-99f9-0259c3e6d2e6'
    }
    if(text === '충남') {
        $(pass1).append('충남 전 지역')
        pass2.textContent = '충남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/011.png?alt=media&token=12c9894a-38ba-49dd-9418-3d10a1a369f5'
    }
    if(text === '전북') {
        $(pass1).append('전북 전 지역')
        pass2.textContent = '전북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/012.png?alt=media&token=2fa61c07-f375-4803-aeb8-cdc02270ba7d'
    }
    if(text === '전남') {
        $(pass1).append('전남 전 지역')
        pass2.textContent = '전남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/013.png?alt=media&token=a1ca3b80-f1cb-4709-a74d-ab46f0a2d2de'
    }
    if(text === '경북') {
        $(pass1).append('경북 전 지역')
        pass2.textContent = '경북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/014.png?alt=media&token=cb418c85-80b9-4571-9710-a3c5b3cf48c0'
    }
    if(text === '경남') {
        $(pass1).append('경남 전 지역')
        pass2.textContent = '경남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/015.png?alt=media&token=2b889a2c-0a49-4d0f-963d-8deb9ef12909'
    }
    if(text === '세종') {
        $(pass1).append('세종 전 지역')
        pass2.textContent = '세종 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/016.png?alt=media&token=80924048-989d-4215-a854-cee07ee5995f'
    }
    if(text === '제주') {
        $(pass1).append('제주 전 지역')
        pass2.textContent = '제주 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/nuru-dea36.appspot.com/o/017.png?alt=media&token=c829d0bf-8d6f-4c67-8fba-bebe5c501d8b'
    }
}