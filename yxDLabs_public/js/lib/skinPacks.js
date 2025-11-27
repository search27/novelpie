const RxPaginationSkinPacks = {

    /**
        *  skins List
        *  @Object
        *  skins[ { name : String, reflect : Function, getStyle : Function } ]
        */
    skins : [],

    init : function(){
        this.skins = [
            { name : 'local', 
                reflect : (allATags) => {
                    const skinType = `isometric-card`;
                    for(let i = 0; i < allATags.length; i++){
                        const each = allATags[i];
                        each.classList.add(skinType);
                        each.href = '#';
                    }
                },
                getStyle : () => {
                // Define skins

                    const style = `
                    
                    
                    .isometric-card {
                        margin: 0 auto;
                        transform-style: preserve-3d;
                        background-color: #fcfcfc;
                        will-change: transform;
                        width: 240px;
                        height: 320px;
                        border-radius: 2rem;
                        box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 7px 0 rgba(34, 33, 81, 0.01),
                        8px 8px 8px 0 rgba(34, 33, 81, 0.25);
                    
                        transition: 0.1s ease-in-out transform, 0.3s ease-in-out box-shadow;

                        font-family: 'Noto Sans KR';
                    }
                    
                    .isometric-card:hover {
                        transform: translate3d(0px, -3px, 0px) rotateX(0deg) rotateZ(10deg);
                        box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 8px 0 rgba(34, 33, 81, 0.01),
                        15px 15px 20px 1px rgba(34, 33, 81, 0.15);
                    }
                    li.active > .isometric-card {
                        font-weight : bolder;
                        transform: translate3d(0px, -3px, 0px) rotateX(0deg) rotateZ(10deg);
                        box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 8px 0 rgba(34, 33, 81, 0.01),
                        15px 15px 20px 1px rgba(34, 33, 81, 0.15);
                        background-color: rgba(255, 255, 255, 0.3);
                    }
                    
                    .isometric-card {
                        color : rgb(61, 118, 153);
                        font-size: 15px;
                    }
                    
                    .isometric-card .mdi-arrow-left {
                        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABUjGyuAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABXElEQVR4Ae2awQ3CMAxFK84MwIUZmKFDMARjsApLMAJTsAQLgJ/El1DVXqq2ov3fkuUTUf6Lk9gpTRMLgRAIgRAIgRAIgRAIgRAIgekIHGuoR/lpuiHXMxLin+Xv8ld5W25l91KLeDkQzk4E9iWW9BcARTsI3UwAxMUpE9B6K1cGKF4DoWnsICBYGaBIdljZEAQOTRvjEFQGKHJYWkHgOpR4Ra5NOwgUSAJABAJVpI21pbQLgRLaCgLNUiAUBDVP2hJAseokSfs+CGwTGwuEWup0kl8I9p0kmbAIhN3KTpjDyuY7arqLrf6o2c38I+tD0PoatBZPydtXBVqUwkPNkIV463aYV6FuG2zzIGL9JGb9KDr0LD5zbfUfw1uLt/4+2NfSkg2bt3R0tcR64VW0+YNEN+0peGzEs7d/OzvEU/LaGRAobS2aGrvVjeAQCIEQCIEQCIEQCIEQ2ACBDyfxvHpi1Wg5AAAAAElFTkSuQmCC');
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        transform: rotateY(180deg);
                    }
                    .isometric-card .mdi-arrow-right {
                        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABUjGyuAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABXElEQVR4Ae2awQ3CMAxFK84MwIUZmKFDMARjsApLMAJTsAQLgJ/El1DVXqq2ov3fkuUTUf6Lk9gpTRMLgRAIgRAIgRAIgRAIgRAIgekIHGuoR/lpuiHXMxLin+Xv8ld5W25l91KLeDkQzk4E9iWW9BcARTsI3UwAxMUpE9B6K1cGKF4DoWnsICBYGaBIdljZEAQOTRvjEFQGKHJYWkHgOpR4Ra5NOwgUSAJABAJVpI21pbQLgRLaCgLNUiAUBDVP2hJAseokSfs+CGwTGwuEWup0kl8I9p0kmbAIhN3KTpjDyuY7arqLrf6o2c38I+tD0PoatBZPydtXBVqUwkPNkIV463aYV6FuG2zzIGL9JGb9KDr0LD5zbfUfw1uLt/4+2NfSkg2bt3R0tcR64VW0+YNEN+0peGzEs7d/OzvEU/LaGRAobS2aGrvVjeAQCIEQCIEQCIEQCIEQ2ACBDyfxvHpi1Wg5AAAAAElFTkSuQmCC');
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                    }
                    `;

                return style;

            }},

            { name : 'box', 
            
            reflect : (allATags) => {

                for(let i = 0; i < allATags.length; i++){
                    const each = allATags[i];
                    each.href = '#';

                    let chk = false;
                    for(let k = 0; k < each.classList.length; k++){
                        if(each.classList[k] === 'rx-applied'){
                            chk = true;
                            break;
                        }
                    }
                    if(chk) continue;
                    each.classList.add('rx-applied');

                    let num = each.innerText;
                    if(num.trim() === ''){ num = each.innerHTML; }
                    each.innerHTML = `
                        <div class="rx-page-box">
                            <div class="top">
                                <div class="upslabel"></div>
                            </div>
                            <div>
                                <span>
                                    ${num}
                                </span>
                                <span>
                                    <i class='tape'></i>
                                </span>
                                <span>
                                    ${num}
                                </span>
                                <span>
                                    <i class='tape'></i>
                                </span>
                            </div>
                        </div>
                    
                    `;
                }

            },
            getStyle : (option) => {
                // Define skins

                const width = option ? (option['width'] ? option['width'] : '200') : '200';
                const height = option ? (option['height'] ? option['height'] : '200') : '200';
                const fontSize = option ? (option['fontSize'] ? option['fontSize'] : '75') : '75';
                
                const smaller = Number(width) > Number(height) ? height : width;
                const taller = Number(width) > Number(height) ? width : height;


                const style = `
                    
                    .rx-pagination a {
                        margin : 0 ${Number(width) / 3.5}px;
                    }
                    .rx-pagination .mdi-arrow-left {
                        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABUjGyuAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABXElEQVR4Ae2awQ3CMAxFK84MwIUZmKFDMARjsApLMAJTsAQLgJ/El1DVXqq2ov3fkuUTUf6Lk9gpTRMLgRAIgRAIgRAIgRAIgRAIgekIHGuoR/lpuiHXMxLin+Xv8ld5W25l91KLeDkQzk4E9iWW9BcARTsI3UwAxMUpE9B6K1cGKF4DoWnsICBYGaBIdljZEAQOTRvjEFQGKHJYWkHgOpR4Ra5NOwgUSAJABAJVpI21pbQLgRLaCgLNUiAUBDVP2hJAseokSfs+CGwTGwuEWup0kl8I9p0kmbAIhN3KTpjDyuY7arqLrf6o2c38I+tD0PoatBZPydtXBVqUwkPNkIV463aYV6FuG2zzIGL9JGb9KDr0LD5zbfUfw1uLt/4+2NfSkg2bt3R0tcR64VW0+YNEN+0peGzEs7d/OzvEU/LaGRAobS2aGrvVjeAQCIEQCIEQCIEQCIEQ2ACBDyfxvHpi1Wg5AAAAAElFTkSuQmCC');
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        transform: rotateY(180deg);
                    }
                    .rx-pagination .mdi-arrow-right {
                        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABUjGyuAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABXElEQVR4Ae2awQ3CMAxFK84MwIUZmKFDMARjsApLMAJTsAQLgJ/El1DVXqq2ov3fkuUTUf6Lk9gpTRMLgRAIgRAIgRAIgRAIgRAIgekIHGuoR/lpuiHXMxLin+Xv8ld5W25l91KLeDkQzk4E9iWW9BcARTsI3UwAxMUpE9B6K1cGKF4DoWnsICBYGaBIdljZEAQOTRvjEFQGKHJYWkHgOpR4Ra5NOwgUSAJABAJVpI21pbQLgRLaCgLNUiAUBDVP2hJAseokSfs+CGwTGwuEWup0kl8I9p0kmbAIhN3KTpjDyuY7arqLrf6o2c38I+tD0PoatBZPydtXBVqUwkPNkIV463aYV6FuG2zzIGL9JGb9KDr0LD5zbfUfw1uLt/4+2NfSkg2bt3R0tcR64VW0+YNEN+0peGzEs7d/OzvEU/LaGRAobS2aGrvVjeAQCIEQCIEQCIEQCIEQ2ACBDyfxvHpi1Wg5AAAAAElFTkSuQmCC');
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                    }

                    .rx-page-box div.upslabel {
                        position: absolute;
                        transform: translate(-80px, -10px) scale(0.25) rotate(-85deg);
                    }

                    .rx-page-box div.label {
                        position: absolute;
                        transform: translate(190px, 60px) rotate(-95deg);
                        width: fit-content;
                        font-size: 0.8em;
                        height: 100px;
                        padding: 6px;
                        background-color: rgba(220, 220, 220, 0.98);
                    }



                    .rx-page-box {
                        position: relative;
                        width: ${width}px;
                        height: ${height}px;
                        transform-style: preserve-3d;
                        /* animation: rx-box-animate 10s linear infinite; */
                        transform: rotateX(-20deg) rotateY(-15deg);
                        transition : all .5s;
                    }

                    .rx-page-box:hover {
                        transform: rotateX(-10deg) rotateY(15deg);
                        box-shadow: 0 0 15px #ffea33, 0 0 25px #FF5722;
                    }
                    li.active .rx-page-box {
                        transform: rotateX(-10deg) rotateY(15deg);
                        box-shadow: 0 0 15px #ffea33, 0 0 25px #ffea33;
                    }


                    .rx-page-box::before {
                        /* shadow */
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: ${width}px;
                        height: ${height}px;
                        background: rgba(0, 0, 0, 0.3);
                        /* transform: rotateX(90deg) translateZ(-120px); */
                        transform: rotateX(90deg) translateZ(-${Number(height)/1.7}px);
                        /* transform: rotateX(90deg) translateX(-25px) translateY(-5px) translateZ(-120px); */
                        filter: blur(10px);
                    }

                    .rx-page-box div {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        transform-style: preserve-3d;
                    }

                    .rx-page-box div span {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: block;
                        background: #333;
                        display: flex;
                        font-size: ${fontSize}px;
                        color : #d45151;
                        justify-content: center;
                        align-items: center;
                    }
                    .rx-page-box div span img {
                        width : 100%;
                        height : 100%;
                    }

                    .rx-page-box div span:nth-child(1) {
                        transform: rotateY(0) translate3d(0, 0, ${(Number(width)/2) + 'px'});
                        background: #FAFAFA;
                    }

                    .rx-page-box div span:nth-child(1)::before {
                        content: "";
                        position: absolute;
                        width: ${width}px;
                        height: ${height}px;
                    }

                    .rx-page-box div span:nth-child(2) {
                        transform: rotateY(90deg) translate3d(0, 0, ${(Number(width)/2) + 'px'});
                        background: #DDD;
                    }

                    .rx-page-box div span:nth-child(3) {
                    transform: rotateY(180deg) translate3d(0, 0, ${(Number(width)/2) + 'px'});
                    background: #FAFAFA;
                    }

                    .rx-page-box div span:nth-child(3)::before {
                        content: "";
                        position: absolute;
                        width: ${width}px;
                        height: ${height}px;

                    }

                    .rx-page-box div span:nth-child(4) {
                        transform: rotateY(270deg) translate3d(0, 0, ${(Number(width)/2) + 'px'});
                        background: #DDD;
                    }

                    .rx-page-box .top {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: ${width}px;
                        height: ${height}px;
                        background: white;
                        display: flex;
                        align-items: center;
                        transform: rotateX(90deg) translate3d(0, 0, ${(Number(width)/2) + 'px'});
                    }

                    .rx-page-box .top::before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: ${Number(smaller)*(30/100)}px;
                        background: #fdf77a;
                        background-size: 85px;
                    }

                    .tape {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, calc(-50% - ${((Number(taller)*(50/100))/2)}px));
                        width: ${Number(smaller)*(30/100)}px;
                        height: ${Number(taller)*(50/100)}px;
                        /* background-color: #d45151; */
                        background: #fdda7a;
                    }

                    span:nth-child(4) .tape {

                    }

                    @keyframes rx-box-animate {
                        0% {
                            transform: rotateX(-30deg) rotateY(-360deg);
                        }
                        100% {
                            transform: rotateX(-30deg) rotateY(0);
                        }
                    }
                
                `;
                return style;

                
            }},

            { name : 'flat-verticle', 
                reflect : (allATags) => {
                    const skinType = `isometric-card`;
                    for(let i = 0; i < allATags.length; i++){
                        const each = allATags[i];
                        each.classList.add(skinType);
                        each.href = '#';
                    }
                },
                getStyle : () => {
                // Define skins

                    const style = `
                    .rx-pagination {}
                    .rx-pagination .paging {
                        flex-direction: column;
                    }
                    .paginationjs-pages ul {
                        flex-direction: column;
                    }
                    .isometric-card {
                        margin: 0 auto;
                        transform: rotateX(51deg) rotateZ(43deg);
                        transform-style: preserve-3d;
                        background-color: #fcfcfc;
                        will-change: transform;
                        width: 240px;
                        height: 320px;
                        border-radius: 2rem;
                        box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 7px 0 rgba(34, 33, 81, 0.01),
                        8px 8px 8px 0 rgba(34, 33, 81, 0.25);
                    
                        transition: 0.4s ease-in-out transform, 0.3s ease-in-out box-shadow;
                    }
                    
                    .isometric-card:hover {
                        transform: translate3d(3px, 0px, 0px) rotateX(51deg) rotateZ(43deg);
                        box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 8px 0 rgba(34, 33, 81, 0.01),
                        15px 15px 20px 1px rgba(34, 33, 81, 0.15);
                    }
                    li.active > .isometric-card {
                        transform: translate3d(13px, 0px, 0px) rotateX(51deg) rotateZ(43deg);
                        box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 8px 0 rgba(34, 33, 81, 0.01),
                        15px 15px 20px 1px rgba(34, 33, 81, 0.15);
                        background-color: #FFEB3B;
                    }
                    
                    .isometric-card {
                        color : #d45151;
                        font-size: 15px;
                    }
                    
                    .isometric-card .mdi-arrow-left {
                        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABUjGyuAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABXElEQVR4Ae2awQ3CMAxFK84MwIUZmKFDMARjsApLMAJTsAQLgJ/El1DVXqq2ov3fkuUTUf6Lk9gpTRMLgRAIgRAIgRAIgRAIgRAIgekIHGuoR/lpuiHXMxLin+Xv8ld5W25l91KLeDkQzk4E9iWW9BcARTsI3UwAxMUpE9B6K1cGKF4DoWnsICBYGaBIdljZEAQOTRvjEFQGKHJYWkHgOpR4Ra5NOwgUSAJABAJVpI21pbQLgRLaCgLNUiAUBDVP2hJAseokSfs+CGwTGwuEWup0kl8I9p0kmbAIhN3KTpjDyuY7arqLrf6o2c38I+tD0PoatBZPydtXBVqUwkPNkIV463aYV6FuG2zzIGL9JGb9KDr0LD5zbfUfw1uLt/4+2NfSkg2bt3R0tcR64VW0+YNEN+0peGzEs7d/OzvEU/LaGRAobS2aGrvVjeAQCIEQCIEQCIEQCIEQ2ACBDyfxvHpi1Wg5AAAAAElFTkSuQmCC');
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        transform: rotateY(180deg);
                    }
                    .isometric-card .mdi-arrow-right {
                        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABUjGyuAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABXElEQVR4Ae2awQ3CMAxFK84MwIUZmKFDMARjsApLMAJTsAQLgJ/El1DVXqq2ov3fkuUTUf6Lk9gpTRMLgRAIgRAIgRAIgRAIgRAIgekIHGuoR/lpuiHXMxLin+Xv8ld5W25l91KLeDkQzk4E9iWW9BcARTsI3UwAxMUpE9B6K1cGKF4DoWnsICBYGaBIdljZEAQOTRvjEFQGKHJYWkHgOpR4Ra5NOwgUSAJABAJVpI21pbQLgRLaCgLNUiAUBDVP2hJAseokSfs+CGwTGwuEWup0kl8I9p0kmbAIhN3KTpjDyuY7arqLrf6o2c38I+tD0PoatBZPydtXBVqUwkPNkIV463aYV6FuG2zzIGL9JGb9KDr0LD5zbfUfw1uLt/4+2NfSkg2bt3R0tcR64VW0+YNEN+0peGzEs7d/OzvEU/LaGRAobS2aGrvVjeAQCIEQCIEQCIEQCIEQ2ACBDyfxvHpi1Wg5AAAAAElFTkSuQmCC');
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                    }
                    `;

                return style;

            }},

        ];
    },

    /**
        * Get All Keys
        * @Function
        */
    getAllSkinsKeys : function(){
        const keys = [];
        for(let i = 0; i < this.skins.length; i++){
            keys.push(this.skins[i]['name']);
        }
        return keys;
    },

    /**
        * Get All List
        * @Function
        */
    getAllSkinsList : function(){
        return this.skins;
    },

    /**
        * Get One of All skinsPacks By Key Value
        * @Function
        * @Parameters (String) _key
        */
    getSkinsPackByKey : function(_key){
        let targetPack;
        for(let i = 0; i < this.skins.length; i++){
            if(this.skins[i]['name'] === _key){
                targetPack = this.skins[i];
                break;
            }
        }
        if(!targetPack) return console.log('CANNOT FIND ' + _keys);
        return targetPack;
    },


};

const RxPaginationSkins = {


    /**
        * RxPaginationSkinPacks
        * @Controller
        */
    RxPaginationSkinPacks : RxPaginationSkinPacks,



     /**
     * @private
     */
     appendStyle : function(head, cssTx){
        const style = document.createElement('style');
        style.type = 'text/css';
        const css = cssTx;
        head.appendChild(style);
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        this.currentStyleSheet = style;
    },


    /**
        *  Action skins
        *  @Function
        *  @Parameters (DOM) target
        *  @Parameters (String) html
        *  @Parameters (Function) callback - optional
        */
    doReflectSkins : function(){
        // Define skins
        const skin = this.RxPaginationSkinPacks.getSkinsPackByKey(this.key);
        return skin['reflect'];
    },

    /**
        *  Action skins
        *  @Function
        *  @Parameters (DOM) target
        *  @Parameters (String) html
        *  @Parameters (String) key
        *  @Parameters (Function) callback - optional
        */
    appendSkinsByPack : function(key, _option){
        // Define skins
        const skin = this.RxPaginationSkinPacks.getSkinsPackByKey(key);
        if(!skin) return console.log('No Find Skin');
        const option = _option ? _option : {};
        this.key = key;
        this.option = option;

        const style = skin['getStyle'](option);
        this.appendStyle(document.head, style);
        
    }

};
