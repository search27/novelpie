importScripts("/js/lib/rxdrive_jspdf.umd.min.js");

self.addEventListener('message', async function(e) {
    const data = e.data;
    const title = data['title'];

    if(data['status'] === 'progress'){

        const files = data['files'];
        const subject = data['subject'];
        const author = data['author'];
        const creator = data['creator'];
        const keywords = data['keywords'];

        const downloadPDF = async function(title){

            var doc = new jspdf.jsPDF('p', 'mm');
            doc.setDocumentProperties({ author : author, creator : creator, keywords : keywords, subject : subject, title : title });

            var imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
            const canvas = files[0]['option'];
            let imgData = files[0]['base64'];
            const margin = 0;
            var pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var position = 0;


            const AddInteract = async function(i){
                const opt = files[i]['option'];
                imgData = files[i]['base64'];
                var imgHeight = opt.height * imgWidth / opt.width;
                
                if(i > 0) await doc.addPage();
                await doc.addImage(imgData, 'WEBP', margin, position, imgWidth, imgHeight);
                this.postMessage({'status':"progress", 'progress' : `${i+1} / ${files.length} 페이지 추가` });
            }.bind(this);


            let i = 0;
            const LoopPage = function(){
                if(i < files.length){
                    AddInteract(i);
                    setTimeout(function(){
                        i++;
                        LoopPage(i);
                    }.bind(this), 1000 / 3);
                }else{

                    self.postMessage({'status':"complete", 'value':doc.output('datauristring')});
                    // interact.ShowMessage(`PDF를 만들고 있습니다.`,3000);
                    // setTimeout(async function(){
                    //     // for(let i = 0; i < this.files.length; i++){
                    //     //     // var imgData = canvas.toDataURL('image/png');
                    //     // }
                    //     await doc.save( title + '.pdf');
                    // }.bind(this), 1000);
                }
            }.bind(this);

            
            LoopPage(i);


            
            
        }.bind(this);

        downloadPDF(title);
        // interact.ShowMessage(`잠시만 기다려주세요.`,3000);

    }else if(data['status'] === 'converter'){

        // const ConvertImgToWebp = (ogFile, quality, canvas, ctx) => {
        //     const PIXEL_RATIO = quality;
        //     const createHiDPICanvas = function(canvas, w, h, ratio) {
        //         if (!ratio) { ratio = PIXEL_RATIO; }
        //         var can = canvas;
        //         can.width = w * ratio;
        //         can.height = h * ratio;
        //         can.style.width = w + "px";
        //         can.style.height = h + "px";
        //         can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
        //         return can;
        //     }.bind(this);

        //     return new Promise(resolve => {
        //         let og_src = URL.createObjectURL(ogFile);
        //         // let canvas = document.createElement('canvas');
        //         let userImage = new Image();
        //         userImage.src = og_src;

        //         userImage.onload = function(){
        //             const can = createHiDPICanvas(canvas, userImage.width, userImage.height, PIXEL_RATIO);
        //             // const ctx = can.getContext('2d');
        //                     ctx.drawImage(userImage, 0, 0);
        //                     let webpImage = can.toDataURL('image/webp');
        //                     let blobBin = atob(webpImage.split(',')[1]);
        //                     let _arr = [];
        //                     for(var i = 0; i < blobBin.length; i++){ _arr.push(blobBin.charCodeAt(i)); }
        //             const orgNm = String(ogFile.name);
        //             const fnm = orgNm.substring(0, orgNm.lastIndexOf('.'));
        //                     let webpFile = new File( [new Uint8Array(_arr)],  fnm+'.webp', {type: 'image/webp'} );
        //                     resolve({webpFile, base64 : webpImage, option : { width : userImage.width, height : userImage.height }});
        //                 }
        //         });
        // }

        // const canvas = data['canvas'];
        // const ctx = canvas.getContext('2d');
        // const files = data['files'];
        // const quality = data['quality'];
        // for(let i = 0; i < files.length; i++){
        //     const webp = await ConvertImgToWebp(files[i], quality, canvas, ctx);
        //     self.postMessage({'status': data['status'], data : webp });
        // }

        // file : files[i],
        //         quality : 1,

    }else{
        self.postMessage({'status': data['status'], 'msg' : data['status'] + ' can not be found.' });
    }

    
}, false);
