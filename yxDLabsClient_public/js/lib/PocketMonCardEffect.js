Math.__proto__.map = function(x, in_min, in_max, out_min, out_max){
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
Math.__proto__.lerp = function(a, b, r){
    return a + (b - a) * r;
}


class PocketMonCardEffect{
    constructor(option){
        this.option = option || {};
        this.ele = this.option['ele'] || undefined;
        this.angle = this.option['angle'] || 30;
        this.perspective = this.option['perspective'] || 2000;
        
        this.bgImage = this.option['bgImage'] || undefined;
        this.bgPosition = this.option['bgPosition'] || undefined;
        this.bgSize = this.option['bgSize'] || undefined;

        this.effectHolo = this.option['effectHolo'] || undefined;
        this.effectHoloMixBlendMode = this.option['effectHoloMixBlendMode'] || undefined;
        this.effectHoloScale = this.option['effectHoloScale'] || 1;
        this.effectHoloOpacity = this.option['effectHoloOpacity'] || 1;

        this.effectSparkles = this.option['effectSparkles'] || undefined;
        this.effectSparklesMixBlendMode = this.option['effectSparklesMixBlendMode'] || undefined;
        this.effectSparklesScale = this.option['effectSparklesScale'] || 1;
        this.effectSparklesOpacity = this.option['effectSparklesOpacity'] || 1;

        this.shadow = this.option['shadow'] || false;
        this.holography = this.option['holography'] || false;
        this.holographyScale = this.option['holographyScale'] || 1.2;
        
        this.holographyImage = this.option['holographyImage'] || undefined;
        this.isHolo = false;
        

        this.prevPx = 0;
        this.prevPy = 0;
        this.ease = 0.001;


        this.clientRect = this.ele.getBoundingClientRect();

        if(this.bgImage) {
            this.ImageApply(this.bgImage, function(){ 
                this.this.bgImage = this.image;
                this.this.ele.style.backgroundImage = `url(${this.this.bgImage.src})`;
                this.this.ele.style.backgroundPosition = `${this.this.bgPosition}`;
                this.this.ele.style.backgroundSize = `${this.this.bgSize}`;
                this.this.ele.style.backgroundRepeat = 'no-repeat';
                this.this.ele.style.overflow = 'hidden';
            });
        }

        if(this.effectHolo){
            this.holoEle = document.createElement('DIV');
            this.holoEle.classList.add('rx-holo');
            this.ele.appendChild(this.holoEle);
            this.holoClientRect = this.holoEle.getBoundingClientRect();

            this.ImageApply(this.effectHolo, function(){ 
                this.this.effectHolo = this.image;
                this.this.holoEle.style.backgroundImage = `url(${this.this.effectHolo.src})`;
                this.this.holoEle.style.backgroundPosition = `${this.this.bgPosition}`;
                this.this.holoEle.style.backgroundSize = `${this.this.bgSize}`;
                this.this.holoEle.style.backgroundRepeat = 'no-repeat';
                this.this.holoEle.style.transform = `scale(${this.this.effectHoloScale})`;
            });
        }

        if(this.effectSparkles){
            this.sparklesEle = document.createElement('DIV');
            this.sparklesEle.classList.add('rx-sparkles');
            this.ele.appendChild(this.sparklesEle);
            this.sparklesRect = this.sparklesEle.getBoundingClientRect();

            this.ImageApply(this.effectSparkles, function(){
                this.this.effectSparkles = this.image;
                this.this.sparklesEle.style.backgroundImage = `url(${this.this.effectSparkles.src})`;
                this.this.sparklesEle.style.backgroundPosition = `${this.this.bgPosition}`;
                this.this.sparklesEle.style.backgroundSize = `${this.this.bgSize}`;
            });
        }

        if(this.shadow){

            this.shadowColor = this.option['shadowColor'] || 'rgba(0, 0, 0, 0.5)';
            this.shadowBlur = this.option['shadowBlur'] || 30;

            this.shadowEle = document.createElement('DIV');
            this.shadowEle.classList.add('rx-shadow');
            this.shadowEle.style.backgroundColor = this.shadowColor;
            this.shadowEle.style.filter = `blur(${this.shadowBlur}px)`;
            this.ele.parentNode.appendChild(this.shadowEle);
        }

        if(this.holography){
            this.holographyEle = document.createElement('DIV');
            this.holographyEle.classList.add('rx-holo');
            this.holographyEle.style.zIndex = '-1';
            this.holographyEle.style.opacity = '0';
            this.holographyEle.style.top = `${this.clientRect.y}px`;
            this.holographyEle.style.left = `${(this.clientRect.x)}px`;
            this.holographyEle.style.width = `${this.clientRect.width}px`;
            this.holographyEle.style.height = `${this.clientRect.height}px`;
            
            this.ele.parentNode.appendChild(this.holographyEle);
            this.ele.addEventListener('click', this.ShowHolography.bind(this));
            this.holographyEle.addEventListener('click', this.HideHolography.bind(this));

            this.ImageApply(this.holographyImage, function(){
                this.this.holographyImage = this.image;
                this.this.holographyEle.style.backgroundImage = `url(${this.this.holographyImage.src})`;
                this.this.holographyEle.style.backgroundPosition = `${this.this.bgPosition}`;
                this.this.holographyEle.style.backgroundSize = `${this.this.bgSize}`;
                this.this.holographyEle.style.backgroundRepeat = 'no-repeat';
            });

        }

        
        this.CreateCard();
        this.ApplyEffect();
        this.ele.addEventListener('resize', function(){
            this.clientRect = this.ele.getBoundingClientRect();
            this.holoClientRect = this.holoEle.getBoundingClientRect();
            this.sparklesRect = this.sparklesEle.getBoundingClientRect();
            this.ApplyEffect();
        }.bind(this));

    }

    Refresh(){
        this.clientRect = this.ele.getBoundingClientRect();
        this.holoClientRect = this.holoEle.getBoundingClientRect();
        this.sparklesRect = this.sparklesEle.getBoundingClientRect();
        this.ApplyEffect();
    }

    CreateCard(){
        if(!this.ele) return;

        this.ele.addEventListener('mousemove', this.Move.bind(this));
        this.ele.addEventListener('mouseleave', this.MoveLeave.bind(this));
        if(this.holography){
            this.holographyEle.addEventListener('mousemove', this.MoveHolo.bind(this));
            this.holographyEle.addEventListener('mouseleave', this.MoveHoloLeave.bind(this));
        }
    }
    ImageApply(target, callback){
        const image = new Image();
        image.src = target;
        image.addEventListener('load', callback.bind({this : this, image : image}));
    }

    ShowHolography(){
        this.isHolo = true;
        this.holographyEle.style.top = `${this.clientRect.y}px`;
        this.holographyEle.style.left = `${this.clientRect.x}px`;
        this.holographyEle.style.width = `${this.clientRect.width}px`;
        this.holographyEle.style.height = `${this.clientRect.height}px`;

        setTimeout(function(){
            this.holographyEle.style.zIndex = '99999';
            this.holographyEle.style.opacity = '1';
            this.holographyEle.style.transform = `scale(${this.holographyScale})`;
        }.bind(this), 500);

    }
    HideHolography(){
        this.isHolo = false;
        this.holographyEle.style.top = `${this.clientRect.y}px`;
        this.holographyEle.style.zIndex = '-1';
        this.holographyEle.style.opacity = '0';
        this.holographyEle.style.transform = `scale(1)`;
    }

    ApplyEffect(){
        if(this.holoEle){
            this.holoEle.style.position = 'absolute';
            this.holoEle.style.top = `${0}px`;
            this.holoEle.style.left = `${0}px`;
            this.holoEle.style.width = `${this.clientRect.width}px`;
            this.holoEle.style.height = `${this.clientRect.height}px`;
            this.holoEle.style.mixBlendMode = this.effectHoloMixBlendMode;
            this.holoEle.style.opacity = this.effectHoloOpacity;

        }
        if(this.sparklesEle){
            this.sparklesEle.style.position = 'absolute';
            this.sparklesEle.style.top = `${0}px`;
            this.sparklesEle.style.left = `${0}px`;
            this.sparklesEle.style.width = `${this.clientRect.width}px`;
            this.sparklesEle.style.height = `${this.clientRect.height}px`;
            this.sparklesEle.style.mixBlendMode = this.effectSparklesMixBlendMode;
            this.sparklesEle.style.opacity = this.effectSparklesOpacity;
        }
        if(this.shadow){
            this.shadowEle.style.position = 'absolute';
            this.shadowEle.style.top = `${(this.clientRect.y + this.clientRect.height)}px`;
            this.shadowEle.style.left = `${(this.clientRect.x)}px`;
            this.shadowEle.style.width = `${this.clientRect.width}px`;
            this.shadowEle.style.height = `${this.angle}px`;
        }
        if(this.holography){
            this.holographyEle.style.position = 'absolute';
            this.holographyEle.style.transition = `all 0.3s`;
        }
    }

    MoveHolo(e){
        if(!this.isHolo) return;
        if(this.holography){
            this.ApplyEffect();

            this.ease += 0.001;
            if(this.ease > 0.03) this.ease = 0.03;

            // this.holographyEle.style.transition = `none`;
            // let px = Math.map(e.clientX, this.clientRect.x, this.clientRect.width + this.clientRect.x, -this.angle, this.angle);
            // // px *= -1;
            // px = Math.abs(px);
            // let py = Math.map(e.clientY, this.clientRect.y, this.clientRect.height + this.clientRect.y, -this.angle, this.angle);
            // py = Math.abs(py);

            let px = Math.map(e.clientX, this.clientRect.x, this.clientRect.width + this.clientRect.x, -this.angle, this.angle);
            px *= -1;
            px = Math.lerp(this.prevPx, px, this.ease);
            let py = Math.map(e.clientY, this.clientRect.y, this.clientRect.height + this.clientRect.y, -this.angle, this.angle);
            py = Math.lerp(this.prevPy, py, this.ease);

            this.holographyEle.style.transform = `rotateX(${py}deg) rotateY(${px}deg) scale(${this.holographyScale})`;

            this.prevPx = px;
            this.prevPy = py;
        }
    }

    MoveHoloLeave(e){
        if(!this.isHolo) return;
        this.ease = 0.001;
        this.prevPx = 0;
        this.prevPy = 0;
        const py = 0;
        const px = 0;
        if(this.isHolography){
            this.holographyEle.style.transition = `all 1s`;
            this.holographyEle.style.transform = `perspective(${this.perspective}px) rotateX(${py}deg) rotateY(${px}deg) scale(${this.holographyScale})`;
        }

    }
    MoveLeave(e){

        this.ease = 0.001;
        this.prevPx = 0;
        this.prevPy = 0;
        const py = 0;
        const px = 0;


        this.ele.style.transition = `all 1s`;
        this.ele.style.transform = `perspective(${this.perspective}px) rotateX(${py}deg) rotateY(${px}deg)`;
        if(this.shadow){
            this.shadowEle.style.transition = `all 1s`;
            this.shadowEle.style.transform = `perspective(${this.perspective}px) rotateX(${py}deg) rotateY(${px}deg)`;
        }
        if(this.isEffectHolo){
            this.holoEle.style.transition = `all 1s`;
            this.holoEle.style.transform = `perspective(${this.perspective}px) rotateX(${py}deg) rotateY(${px}deg) scale(${this.effectHoloScale})`;
        }

        if(this.isBackground){
            this.backgroundEle.style.transition = `all 1s`;
            this.backgroundEle.style.transform = `perspective(${this.perspective}px) rotateX(${py}deg) rotateY(${px}deg) scale(${this.backgroundScale})`;
        }
        
    }

    Move(e){
        if(this.isHolo) return;
        if(!this.ele) return;

        this.ease += 0.001;
        if(this.ease > 0.03) this.ease = 0.03;

        let px = Math.map(e.clientX, this.clientRect.x, this.clientRect.width + this.clientRect.x, -this.angle, this.angle);
        px *= -1;
        px = Math.lerp(this.prevPx, px, this.ease);
        let py = Math.map(e.clientY, this.clientRect.y, this.clientRect.height + this.clientRect.y, -this.angle, this.angle);
        py = Math.lerp(this.prevPy, py, this.ease);

        this.ele.style.transition = `none`;
        this.ele.style.transform = `perspective(${this.perspective}px) rotateX(${py}deg) rotateY(${px}deg)`;

        if(this.shadow){
            this.shadowEle.style.transition = `none`;
            this.shadowEle.style.transform = `rotateX(${py}deg) rotateY(${px}deg)`;
        }

        if(this.isEffectHolo){
            this.holoEle.style.transition = `none`;
            this.holoEle.style.transform = `rotateX(${py}deg) rotateY(${px}deg) scale(${this.effectHoloScale})`;
        }
        if(this.isBackground){
            this.backgroundEle.style.transition = `none`;
            this.backgroundEle.style.transform = `perspective(${this.perspective}px) rotateX(${py}deg) rotateY(${px}deg) scale(${this.backgroundScale})`;
        }
        

        this.prevPx = px;
        this.prevPy = py;

    }


}

window.PocketMonCardEffect = PocketMonCardEffect;